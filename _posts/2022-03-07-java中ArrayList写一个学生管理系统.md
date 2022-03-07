---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Java
---

主要是熟练使用arrayList，这个是可变的，数组不可变

重点：
1. alt+insert 自动生成get set 等代码
2. 添加学生，学号不能重复

### 1. Student.java
```java
package com.itheima;

//alt+insert 自动生成get set 等代码
public class Student {
    private String sid;
    private String name;
    private String age;
    private String address;

    public Student() {
    }

    public Student(String sid, String name, String age, String address) {
        this.sid = sid;
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}


```

### 2. StudentManager.java
```java
package com.itheima;

import java.util.ArrayList;
import java.util.Scanner;

public class StudentManager {
    /*
    * 1. 完成主界面
    * 2. 用Scanner实现键盘输入
    * 3. 用switch完成操作的选择
    * 4. 用循环完成再次回到主界面
    *
    * 5. ！！！！！！！添加学生，学号不能重复
    * */
    public static void main(String[] args) {
        //创建集合对象
        ArrayList<Student> array = new ArrayList<>();

        while(true){//能再次回到主界面
            System.out.println("======欢迎来到学生管理系统=======");
            System.out.println("1 添加学生");
            System.out.println("2 删除学生");
            System.out.println("3 修改学生");
            System.out.println("4 查看所有学生");
            System.out.println("5 退出");
            System.out.println("请输入你的选择");

            Scanner sc = new Scanner(System.in);
            String line = sc.nextLine();

            switch (line){
                case "1":
//                    System.out.println("添加学生");
                    addStudent(array);
                    break;
                case "2":
//                    System.out.println("删除学生");
                    deleteStudent(array);
                    break;
                case "3":
                    updateStudent(array);
//                    System.out.println("修改学生");
                    break;
                case "4":
                    findAllStudent(array);
//                    System.out.println("查看所有学生");
                    break;
                case "5":
                    System.out.println("谢谢使用");
                    System.exit(0);//jvm退出
            }
        }
    }

    public static boolean isUsed(ArrayList<Student> array, String sid){
        boolean flag = false;
        for(int i = 0; i < array.size(); i++){
            Student s = array.get(i);
            if(s.getSid().equals(sid)){
                flag = true;
                break;
            }
        }
        return flag;
    }

    public static void addStudent(ArrayList<Student> array){
        //键盘录入学生
        Scanner sc = new Scanner(System.in);
        String sid;//需要定义再外面，不然s.setSid(sid);获取不到参数了

        while(true){
            System.out.println("请输入学号：");
            sid = sc.nextLine();

            boolean flag = isUsed(array, sid);
            if(flag){
                System.out.println("该学号已经被使用");
            }else{
                break;
            }
        }

        System.out.println("请输入姓名：");
        String name = sc.nextLine();
        System.out.println("请输入年龄：");
        String age = sc.nextLine();
        System.out.println("请输入居住地：");
        String address = sc.nextLine();

        Student s = new Student();
        s.setSid(sid);
        s.setName(name);
        s.setAge(age);
        s.setAddress(address);

        array.add(s);

        System.out.println("添加学生成功");
    }

    public static void findAllStudent(ArrayList<Student> array){
        System.out.println("学号\t姓名\t年龄\t居住地");

        for(int i = 0; i < array.size(); i++){
            Student s = array.get(i);
            System.out.println(s.getSid()+"\t"+s.getName()+"\t"+s.getAge()+"\t"+s.getAddress());
        }
    }

    //如果判断学生是否存在，可以判断index，默认-1，找到了就更新下index
    public static void deleteStudent(ArrayList<Student> array){
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入删除学号");
        String sid = sc.nextLine();

        for(int i = 0; i < array.size(); i++){
            Student s = array.get(i);
            if(s.getSid().equals(sid)){
                array.remove(i);
                break;
            }
        }
        System.out.println("删除学生成功");

    }

    public static void updateStudent(ArrayList<Student> array){
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入修改的学号");
        String sid = sc.nextLine();

        System.out.println("请输入学生新姓名");
        String name = sc.nextLine();
        System.out.println("请输入学生新年龄");
        String age = sc.nextLine();
        System.out.println("请输入学生新居住地");
        String address = sc.nextLine();

        Student s = new Student();
        s.setSid(sid);
        s.setName(name);
        s.setAge(age);
        s.setAddress(address);

        for(int i = 0; i < array.size(); i++){
            Student student = array.get(i);
            if(student.getSid().equals(sid)){
                array.set(i, s);
                break;
            }
        }
        System.out.println("修改学生成功");
    }
}


```