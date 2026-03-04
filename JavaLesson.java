public class JavaLesson {

  public static void main(String[] args) {
  
    //Definitions
  String[] cities = {"Boston", "Phoenix", "New York City", "Dallas", "Portland"};
  String[] states = {"MA", "AZ", "NY", "TX", "OR"};

  //Function Calls
  arrayPrint(cities);
  }

  public static void doubleArrayPrint (String[] cities, String[] states) {
    String[][] places = {cities, states};
  }

  public static void arrayPrint (String[] places) {
    //This method uses different variations on for loops over an array
    
    //print out all places
  for (int i=0; i<5; i++) { //go through 5 steps: i=0,1,2,3,4
    System.out.println(places[i]);
  }

  System.out.println();

  //print out last 4 places
  for (int i=1; i<5; i++) { //goes through i=1,2,3,4
    System.out.println(places[i]);
  }

  System.out.println();

  //print out all places
  for (int i=0; i<=4; i++) { //go through 5 steps: i=0,1,2,3,4
    System.out.println(places[i]);
  }
  }
}
