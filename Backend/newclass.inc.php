<?php 

class NewClass{

    //Properties and Methods
    public $info = "This is some info";

}

$object = new NewClass;
var_dump($object);


class Person {
    private $first = 'daniel';
    private $last = 'Nielsen';
    private $age = '28';
};

class Pet extends Person {

};