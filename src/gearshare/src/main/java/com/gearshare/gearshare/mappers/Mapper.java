package com.gearshare.gearshare.mappers;

public interface Mapper<A, B> {

    B mapTo(A a); // A -> B

    A mapFrom(B b); // A <- B

}
