package com.joshua.easypass.repository;

import com.joshua.easypass.entity.Authlist;
import com.joshua.easypass.util.DataUtil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AuthlistRepository extends JpaRepository<Authlist, Integer> {

    @Query("SELECT a FROM Authlist a")
    public Authlist[] getAllAuth();

    @Query("SELECT a FROM Authlist a WHERE a.authtype = :authtype")
    public Authlist[] getAuthByType(@Param("authtype") String authtype);

    @Query("SELECT a.authname FROM Authlist a WHERE a.authid in (:authids)")
    public List<String> getAuthNames(@Param("authids") List<Integer> authids);
}
