package com.eazybytes.eazystore.dto;


//This is Immutable as it is a java record, not class
public record LoginRequestDto(String username, String password) {
}
