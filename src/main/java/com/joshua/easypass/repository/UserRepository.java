package com.joshua.easypass.repository;

import com.joshua.easypass.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("SELECT u FROM User u WHERE u.username = :username AND u.password = :password")
    public User find(@Param("username") String username, @Param("password") String password);

    @Query("SELECT u FROM User u WHERE u.username like %:username% AND u.phone like %:phone% AND u.rolename like %:role% AND u.state like %:state%")
    public User[] getUsers(@Param("username") String username, @Param("phone") String phone, @Param("role") String role, @Param("state") String state);

    @Query("SELECT u FROM User u WHERE u.userid = :userid")
    public User getUser(@Param("userid") Integer userid);

}