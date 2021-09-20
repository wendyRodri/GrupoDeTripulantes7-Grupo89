package co.edu.utp.misiontic2022;

import java.util.ArrayList;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        ArrayList <Object> lista = new ArrayList();
        // (Object) para aceptar cualquier tipo de dato que quieras meter en la lista
        lista.add(15);
        lista.add(20);
        lista.add(3.5);
        lista.add("hola");
        lista.add("A");
    

        System.out.println(lista.get(2));
        System.out.println(lista.indexOf("hola")); 
        System.out.println(lista.size()); //para ver el tamaño de la lista
        lista.remove(1); //para borrar el objeto en la posicion 1
        System.out.println(lista.get(1));
        System.out.println(lista.isEmpty()); //para saber si la lista esta vacia
        lista.clear();  //para borrar todo el contenido de la lista
        System.out.println(lista); //para imprimir la lista

        for (int i=0; i<lista.size(); i++){
            System.out.println(lista.get(i));
        } // este for me imprime la lista posicion por posicion
        



    }
}
