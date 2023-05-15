package com.linkedin.service;

import com.linkedin.model.User;
import com.linkedin.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class TokenService {

    @Autowired
    UserRepository userRepository;

    private static final String SECRET_KEY = "mySecretKeykeykeykeykeykeykeykeykey";
    private static final long EXPIRATION_TIME = 864_000_000;
    private static final SecretKey key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

    public String generateToken(User user){
        Map<String,Object> claims = new HashMap<>();
        claims.put("id",user.getId());
        claims.put("name",user.getName());
        claims.put("email",user.getEmail());
        claims.put("username",user.getUsername());
        claims.put("profileImg",user.getProfileImg());
        claims.put("coverImg",user.getCoverImg());
        claims.put("description",user.getDescription());
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+EXPIRATION_TIME))
                .signWith(key,SignatureAlgorithm.HS256)
                .compact();

    }

    public User extractUserDetails(String token){
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token.replace("Bearer ", ""))
                .getBody();
//        System.out.println(claims.get("id"));
        Optional<User> user = userRepository.findById((Integer) claims.get("id"));
        return user.orElse(null);
    }


    public boolean validateToken(String token){
        try{
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (Exception e){
            return false;
        }
    }
}
