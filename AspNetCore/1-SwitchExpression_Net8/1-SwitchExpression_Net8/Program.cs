int number=5;

//Before .Net 8

switch(number)
{

    case 1:
        Console.WriteLine("One");
        break;
    case 2:
        Console.WriteLine("Two");
        break;
    case 3:
        Console.WriteLine("Three");
        break;
    case 4:
        Console.WriteLine("Four");
        break;
    case 5:
        Console.WriteLine("Five");
        break;
    default:
        Console.WriteLine("Unknown");
        break;
}


//After .Net 8

string result = number switch
{
    1 => "One",
    2 => "Two",
    3 => "Three",
    4 => "Four",
    5 => "Five",
    _ => "Unknown"
};
