package com.joshua.easypass.util;

import java.util.Arrays;
import java.util.List;

public class DataUtil {

    public static List<Integer> strToList(String str) {
        if (str.length() != 0) {
            String[] str1 = str.split(",");

            Integer[] intTemp = new Integer[str1.length];
            for (int i = 0; i < str1.length; i++) {
                intTemp[i] = Integer.parseInt(str1[i]);
            }
            return Arrays.asList(intTemp);
        } else {
            return null;
        }
    }
}
