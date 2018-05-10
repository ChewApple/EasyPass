package com.joshua.easypass.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Itemdetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer papid;
    private String papMaterial;
    private String carPresent;
    private float carPresentCost;
    private String carPresentDesc;
    private String oriIdType;
    private String oriIdDesc;
    private float oriIdCost;
    private String oriOtherCert;
    private float oriOtherCertCost;
    private String oriOtherCertDesc;
    private String oriPresent;
    private float oriPresentCost;
    private String oriPresentDesc;
    private String oriSampleVideoPath;
    private String oriSampleImagePath;
    private String oriSampleCertPath;
    private String oriComments;
    private float oriCost;
    private String oriLisenceType;
    private String oriLisenceDesc;
    private float oriLisenceCost;

    private String newIdType;
    private String newIdDesc;
    private float newIdCost;
    private String newOtherCert;
    private float newOtherCertCost;
    private String newOtherCertDesc;
    private String newPresent;
    private float newPresentCost;
    private String newPresentDesc;
    private String newSampleVideoPath;
    private String newSampleImagePath;
    private String newSampleCertPath;
    private String newComments;
    private float newCost;
    private String newLisenceType;
    private String newLisenceDesc;
    private float newLisenceCost;

    private Integer relatedVendorId;
    private Date createdate;
    private String creator;
    private String state;
    private String add1;
    private String add2;
    private String add3;

    public Integer getPapid() {
        return papid;
    }

    public void setPapid(Integer papid) {
        this.papid = papid;
    }

    public String getPapMaterial() {
        return papMaterial;
    }

    public void setPapMaterial(String papMaterial) {
        this.papMaterial = papMaterial;
    }

    public String getCarPresent() {
        return carPresent;
    }

    public void setCarPresent(String carPresent) {
        this.carPresent = carPresent;
    }

    public float getCarPresentCost() {
        return carPresentCost;
    }

    public void setCarPresentCost(float carPresentCost) {
        this.carPresentCost = carPresentCost;
    }

    public String getCarPresentDesc() {
        return carPresentDesc;
    }

    public void setCarPresentDesc(String carPresentDesc) {
        this.carPresentDesc = carPresentDesc;
    }

    public String getOriIdType() {
        return oriIdType;
    }

    public void setOriIdType(String oriIdType) {
        this.oriIdType = oriIdType;
    }

    public String getOriIdDesc() {
        return oriIdDesc;
    }

    public void setOriIdDesc(String oriIdDesc) {
        this.oriIdDesc = oriIdDesc;
    }

    public float getOriIdCost() {
        return oriIdCost;
    }

    public void setOriIdCost(float oriIdCost) {
        this.oriIdCost = oriIdCost;
    }

    public String getOriOtherCert() {
        return oriOtherCert;
    }

    public void setOriOtherCert(String oriOtherCert) {
        this.oriOtherCert = oriOtherCert;
    }

    public float getOriOtherCertCost() {
        return oriOtherCertCost;
    }

    public void setOriOtherCertCost(float oriOtherCertCost) {
        this.oriOtherCertCost = oriOtherCertCost;
    }

    public String getOriOtherCertDesc() {
        return oriOtherCertDesc;
    }

    public void setOriOtherCertDesc(String oriOtherCertDesc) {
        this.oriOtherCertDesc = oriOtherCertDesc;
    }

    public String getOriPresent() {
        return oriPresent;
    }

    public void setOriPresent(String oriPresent) {
        this.oriPresent = oriPresent;
    }

    public float getOriPresentCost() {
        return oriPresentCost;
    }

    public void setOriPresentCost(float oriPresentCost) {
        this.oriPresentCost = oriPresentCost;
    }

    public String getOriPresentDesc() {
        return oriPresentDesc;
    }

    public void setOriPresentDesc(String oriPresentDesc) {
        this.oriPresentDesc = oriPresentDesc;
    }

    public String getOriSampleVideoPath() {
        return oriSampleVideoPath;
    }

    public void setOriSampleVideoPath(String oriSampleVideoPath) {
        this.oriSampleVideoPath = oriSampleVideoPath;
    }

    public String getOriSampleImagePath() {
        return oriSampleImagePath;
    }

    public void setOriSampleImagePath(String oriSampleImagePath) {
        this.oriSampleImagePath = oriSampleImagePath;
    }

    public String getOriSampleCertPath() {
        return oriSampleCertPath;
    }

    public void setOriSampleCertPath(String oriSampleCertPath) {
        this.oriSampleCertPath = oriSampleCertPath;
    }

    public String getOriComments() {
        return oriComments;
    }

    public void setOriComments(String oriComments) {
        this.oriComments = oriComments;
    }

    public float getOriCost() {
        return oriCost;
    }

    public void setOriCost(float oriCost) {
        this.oriCost = oriCost;
    }

    public String getOriLisenceType() {
        return oriLisenceType;
    }

    public void setOriLisenceType(String oriLisenceType) {
        this.oriLisenceType = oriLisenceType;
    }

    public String getOriLisenceDesc() {
        return oriLisenceDesc;
    }

    public void setOriLisenceDesc(String oriLisenceDesc) {
        this.oriLisenceDesc = oriLisenceDesc;
    }

    public float getOriLisenceCost() {
        return oriLisenceCost;
    }

    public void setOriLisenceCost(float oriLisenceCost) {
        this.oriLisenceCost = oriLisenceCost;
    }

    public String getNewIdType() {
        return newIdType;
    }

    public void setNewIdType(String newIdType) {
        this.newIdType = newIdType;
    }

    public String getNewIdDesc() {
        return newIdDesc;
    }

    public void setNewIdDesc(String newIdDesc) {
        this.newIdDesc = newIdDesc;
    }

    public float getNewIdCost() {
        return newIdCost;
    }

    public void setNewIdCost(float newIdCost) {
        this.newIdCost = newIdCost;
    }

    public String getNewOtherCert() {
        return newOtherCert;
    }

    public void setNewOtherCert(String newOtherCert) {
        this.newOtherCert = newOtherCert;
    }

    public float getNewOtherCertCost() {
        return newOtherCertCost;
    }

    public void setNewOtherCertCost(float newOtherCertCost) {
        this.newOtherCertCost = newOtherCertCost;
    }

    public String getNewOtherCertDesc() {
        return newOtherCertDesc;
    }

    public void setNewOtherCertDesc(String newOtherCertDesc) {
        this.newOtherCertDesc = newOtherCertDesc;
    }

    public String getNewPresent() {
        return newPresent;
    }

    public void setNewPresent(String newPresent) {
        this.newPresent = newPresent;
    }

    public float getNewPresentCost() {
        return newPresentCost;
    }

    public void setNewPresentCost(float newPresentCost) {
        this.newPresentCost = newPresentCost;
    }

    public String getNewPresentDesc() {
        return newPresentDesc;
    }

    public void setNewPresentDesc(String newPresentDesc) {
        this.newPresentDesc = newPresentDesc;
    }

    public String getNewSampleVideoPath() {
        return newSampleVideoPath;
    }

    public void setNewSampleVideoPath(String newSampleVideoPath) {
        this.newSampleVideoPath = newSampleVideoPath;
    }

    public String getNewSampleImagePath() {
        return newSampleImagePath;
    }

    public void setNewSampleImagePath(String newSampleImagePath) {
        this.newSampleImagePath = newSampleImagePath;
    }

    public String getNewSampleCertPath() {
        return newSampleCertPath;
    }

    public void setNewSampleCertPath(String newSampleCertPath) {
        this.newSampleCertPath = newSampleCertPath;
    }

    public String getNewComments() {
        return newComments;
    }

    public void setNewComments(String newComments) {
        this.newComments = newComments;
    }

    public float getNewCost() {
        return newCost;
    }

    public void setNewCost(float newCost) {
        this.newCost = newCost;
    }

    public String getNewLisenceType() {
        return newLisenceType;
    }

    public void setNewLisenceType(String newLisenceType) {
        this.newLisenceType = newLisenceType;
    }

    public String getNewLisenceDesc() {
        return newLisenceDesc;
    }

    public void setNewLisenceDesc(String newLisenceDesc) {
        this.newLisenceDesc = newLisenceDesc;
    }

    public float getNewLisenceCost() {
        return newLisenceCost;
    }

    public void setNewLisenceCost(float newLisenceCost) {
        this.newLisenceCost = newLisenceCost;
    }

    public Integer getRelatedVendorId() {
        return relatedVendorId;
    }

    public void setRelatedVendorId(Integer relatedVendorId) {
        this.relatedVendorId = relatedVendorId;
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getAdd1() {
        return add1;
    }

    public void setAdd1(String add1) {
        this.add1 = add1;
    }

    public String getAdd2() {
        return add2;
    }

    public void setAdd2(String add2) {
        this.add2 = add2;
    }

    public String getAdd3() {
        return add3;
    }

    public void setAdd3(String add3) {
        this.add3 = add3;
    }
}
