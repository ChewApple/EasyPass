package com.joshua.easypass.repository;

import com.joshua.easypass.entity.Itemdetail;
import com.joshua.easypass.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ItemdetailRepository extends JpaRepository<Itemdetail, Integer> {
    @Query("SELECT i FROM Itemdetail i WHERE i.papid = :papid")
    public Itemdetail getItemdetail(@Param("papid") Integer papid);

}
