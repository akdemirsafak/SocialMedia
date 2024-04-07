let javaScript='JavaScript Developers';

// console.log("Text'in uzunluğu/karakterSayısı : ",javaScript.length);

// console.log("Text'in 2. index'indeki karakter : ", javaScript[2]);

// console.log("2. indexteki karakter : ",javaScript.charAt(2)); 

// console.log("2. indexteki karakterin UNICODE değeri : ", javaScript.charCodeAt(2))

// console.log("Karakterin hangi indexte olduğunu döndürür. : ",javaScript.indexOf('S')); //Birden fazlaysa ilk gördüğünün index'ini döndürür.

// console.log(javaScript.toLowerCase());
// console.log(javaScript.toUpperCase());

console.log(javaScript.slice(0,4)); //Başlangıç index'inden itibaren 4 karkater döndürür.ilk değer dahil.

console.log("Substring : ",javaScript.substring(6,8)); // 3. index'den 4. index'e kadar döndürür.başlangıç index'i dahil.

console.log("Concat : ",javaScript.concat(" Need Coffee")); //Append işlemi yapar. Sondan ekleme.

console.log("Split : ",javaScript.split(" ")); //her boşlukta kelimeleri ayırır ve dizi haline getirir.

console.log("Includes : ",javaScript.includes("JavaScript")); //String'in içerisinde bu kelime var mı ?

console.log("Replace :",javaScript.replace("JavaScript","Coffe")); //Javascript'i coffe olarak değiştirir. replaceAll' birden fazla varsa tüm JavaScript kelimelerini değiştirmek için kullanılır.

console.log("Trim : ",javaScript.trim());
console.log("Trim start : ",javaScript.trimStart());
console.log("trim end : ",javaScript.trimEnd());

console.log("PadStart : ","Ankara".padStart(20,'*')) //String'in başına 20 karakter kadar * karakterleri ekle.
console.log("PadEnd : ","İstanbul".padEnd(20,'*')) //String'in sonuna 20 karakter kadar * karakterleri

console.log("Startwith : ",javaScript.startsWith("JavaScript")); //Bu string belirliten karakter veya karakterlerle mi başlıyor? True false
console.log("Endwith : ",javaScript.endsWith("J")); //J ile mi bitiyor.
console.log("Repeat : ", javaScript.repeat(2)); //string i 2 defa döndürür.
console.log("IndexOf : ", javaScript.indexOf("JavaScript")); //String'in içerisinde JavaScript hangi index'ten başlıyor?
console.log("LastIndexOf", javaScript.lastIndexOf("e"));//sondan başlayıp e nin index'ini döndürür.
console.log("Search : ", javaScript.search("S")); //S yi arar ve indeksini döndürür