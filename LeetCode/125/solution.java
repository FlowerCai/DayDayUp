class Solution {
    public static boolean isPalindrome(String s) {
        StringBuffer sb =new StringBuffer();
        char[] cr = s.toCharArray();
        for(int i=0; i< cr.length; i++){
            if( (cr[i]>='0' && cr[i]<='9') | (cr[i]<='z' && cr[i] >='a') | (cr[i]<='Z' && cr[i] >='A')){
                sb.append(cr[i]);
            }else{
                continue;
            }
        }
        String str = sb.toString().toLowerCase();
        System.out.println(str);
        int left=0;
        int right =str.length()-1;
        while( left <= right){
            if(str.charAt(left) == str.charAt(right)){
                left ++;
                right--;
                continue;
            }else{
                return false;
            }
        }
        return true;
    }
}