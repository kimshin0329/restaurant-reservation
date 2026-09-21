package com.kimshin.restaurant_reservation_api.security;



import com.kimshin.restaurant_reservation_api.domain.Member;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;



@Component
public class JwtProvider {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.access-token-validity-in-milliseconds}")
    private long accessTokenValidity;

    // AccessToken 생성
    public String createAccessToken (Member member)
    {
        SecretKey key = Keys.hmacShaKeyFor(
                Decoders.BASE64.decode(secret)
        );

        return Jwts.builder()
                .subject(String.valueOf(member.getId()))
                .claim("role",member.getRole().name())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + accessTokenValidity))
                .signWith(key)
                .compact();

    }

    // JWT 검증
    public boolean validateToken(String token) {
        try {
            SecretKey key = Keys.hmacShaKeyFor(
                    Decoders.BASE64.decode(secret)
            );

            Jwts.parser()
                    .verifyWith(key)
                    .build()
                    .parseSignedClaims(token);

            return true;

        } catch (Exception e) {
            return false;
        }
    }


    public String getMemberId(String token) {
        SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));

        return Jwts.parser().verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }


    public String getRole(String token) {
        SecretKey key = Keys.hmacShaKeyFor(
                Decoders.BASE64.decode(secret)
        );

        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .get("role", String.class);
    }

}
