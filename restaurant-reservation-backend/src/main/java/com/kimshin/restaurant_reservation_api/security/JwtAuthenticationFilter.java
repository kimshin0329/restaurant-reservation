package com.kimshin.restaurant_reservation_api.security;



import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {


    private final JwtProvider jwtProvider;

    @Override
    protected void doFilterInternal(

            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        // Authorization 헤더에서 JWT 추출
        String authorization = request.getHeader("Authorization");


        if (authorization != null && authorization.startsWith("Bearer ")) {

            String token = authorization.substring(7);
            boolean valid = jwtProvider.validateToken(token);

            //  JWT 검증
            if (valid) {

                String memberId = jwtProvider.getMemberId(token);
                String role = jwtProvider.getRole(token);
                List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("ROLE_" + role));
                Authentication authentication =
                        new UsernamePasswordAuthenticationToken(memberId, null, authorities);

                SecurityContextHolder.getContext().setAuthentication(authentication);



            }
        }

        //  다음 필터로 요청 전달
        filterChain.doFilter(request, response);
    }


}
