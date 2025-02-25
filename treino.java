public interface Animal { 
    void fazerSom(); 
}
public class Cachorro implements Animal { 
    public void fazerSom() { 
        System.out.println("O cachorro late."); 
    } 
}
public class Gato implements Animal { 
    public void fazerSom() { 
        System.out.println("O gato mia."); 
    } 
}
