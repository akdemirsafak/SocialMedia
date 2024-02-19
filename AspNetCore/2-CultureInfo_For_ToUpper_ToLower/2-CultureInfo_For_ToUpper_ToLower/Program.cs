
//BAD 
using System.Globalization;

Thread.CurrentThread.CurrentCulture = new CultureInfo("tr-TR");
string turkishWord="insteresting";
bool isEquals = turkishWord.ToUpper() == "INTERESTING"; //false

//TRUE - GOOD
Thread.CurrentThread.CurrentCulture = new CultureInfo("tr-TR");
string turkishWord2="insteresting";
bool isEqual=string.Equals(turkishWord,"INTERESTING",StringComparison.OrdinalIgnoreCase); //true
