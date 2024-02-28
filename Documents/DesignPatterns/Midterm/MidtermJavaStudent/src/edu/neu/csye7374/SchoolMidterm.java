package edu.neu.csye7374;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
//import java.sql.Struct;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 100 TOTAL POINTS STUDENT SKELETON CSYE7374 School Midterm
 * 
 * 20 POINT DEDUCTION IF SUBMITTED LATE OR INCORRECTLY
 * Complete development of this class using: 
 * Abstract Factory, Adapter, Builder, Decorator, Factory, Flyweight, Singleton, Strategy design patterns
 * 
 * Given:
 * 
 * interface PersonAPI
 * interface StudentAPI
 * interface CourseAPI
 * GradeContext class
 * interface GradeStrategy
 * interface FlyweightCurveAbstractFactoryAPI
 * 
 * 
 * 10 POINTS: Develop:
 * ConvertUtil class
 * Student class
 * 
 * 20 POINTS: Develop:
 * StudentBuilder class 
 * StudentFactory class 
 * StudentFactoryEnumSingleton class 
 * StudentFactoryEarlySingleton class 
 * StudentFactoryLazySingleton class
 * NOTE: must support CSV String, i.e. "ID,AGE,FIRSTNAME,LASTNAME,GPA" e.g. "2,17,Dan,Peters,3.9" 
 * 
 * CanvasStudentAdapter to adapt LEGACY (Blackboard) CSV String to NEW Canvas CSV String
 * 	 e.g. "ID,AGE,FIRSTNAME,LASTNAME,GPA" => "ID,LASTNAME,FIRSTNAME,AGE,GPA"
 * 
 * 5 POINTS: Develop: course classes:
 * CSYE6200 class
 * CSYE6202 class
 * CSYE6205 class
 * CSYE7374 class
 * INFO5100 class
 * 
 * AND 
 * 
 * 25 POINTS: Develop: 
 * CourseDecoratorAdapter class to adapt Course classes to be CourseDecorators (to Decorate a Course)
 * 
 * 20 POINTS: Develop: Strategy classes using Strategy pattern and implementing GradeStrategy to curve grades (GPA) up (by percent) and down:
 * CurveDown1 class
 * CurveDown2 class
 * CurveUp1 class
 * CurveUp2 class
 * 
 * AND
 * 
 * 20 POINTS: Develop: 
 * CurveFlyweight class using Flyweight pattern and implementing GradeStrategy to curve grades (GPA) up (by percent) and down:
 * CurveAbstractFactory and CurveFlyweightEnumSingletonFactory classes to create GradeStrategy Flyweight classes to curve grades (GPA)
 * 
 * 
 * NOTE:
 * all student developed classes will be exercised by the following code complete GIVEN methods:
 * 
 * demo()
 * useAdapterPattern()
 * useDecoratorPattern()
 * useFactoryPattern()
 * useFlyweightPattern()
 * useStrategyPattern()
 * 
 * 
 * 
 * CSYE6200 School Assignment 
 * @author dpeters
 *
 * 100 TOTAL POINTS
 * 
 * Create a School class with TWO Lists of Students:
 *         List<Student> studentRoster (using Student API)
 *         List<Person> personRoster (using Person API)
 *     5 POINTS - add method to add Students to Student List
 *     5 POINTS - add method to add Students to Person List
 *     5 POINTS - add method to sort Students to Student List
 *     5 POINTS - add method to sort Students to Person List
 *    10 POINTS - Override toString() to show both Lists     
 *
 * Add 5 Students to EACH List
 *     10 POINTS - Person is super class
 *     10 POINTS - Student is derived subclass of Person
 * 
 * Sort EACH List of students 4 TIMES: 
 *     10 POINTS 1. by ID, and show both Lists
 *     10 POINTS 2. by Age, and show both Lists
 *     10 POINTS 3. by Last Name, and show both Lists
 *     20 POINTS 4. by GPA, and show both Lists
 * 
 * 20 POINT DEDUCTION IF LATE OR SUBMITTED iNCORRECTLY
 *
 *
 */
public class SchoolMidterm {
	public static final String VERSION = "6.5.12";

	/**
	 * [STUDENT TODO]
	 * 
	 * ConvertUtil class used to convert String representations of integer and double precision values
	 */
	 public static class ConvertUtil {
		 
		 public static int strToInt (String str) {
			 
			 try {
				 return Integer.parseInt(str);
			 }
			 catch(NumberFormatException e) {
				 return 0;
			 }
		 }
		 
		 public static double strToDouble (String str) {
			 
			 try {
				 return Double.parseDouble(str);	
			 }
			 catch (NumberFormatException e) {
				 return 0.0;
			 }
		 }
	 }

	/**
	 * GIVEN:
	 * 
	 * PersonAPI implemented by Person and Student classes
	 */
	private interface PersonAPI {
		public enum PERSON_IX {
			ID_IX(0), AGE_IX(1), FIRST_NAME_IX(2), LAST_NAME_IX(3);
			private int index;
			private PERSON_IX(int n) { index = n; };
			public int getIndex() { return index; }
		}
		
		int getId();
		void setId(int id);
		int convertAge(String s);
		int getAge();
		void setAge(int age);
		String getFirstName();
		void setFirstName(String firstName);
		String getLastName();
		void setLastName(String lastName);
		String toCSVString();	
	}
	
	
	/**
	 * GIVEN:
	 * 
	 * StudentAPI implemented by Student class
	 */
	private interface StudentAPI {
		public enum STUDENT_IX {
			GPA_IX(4);
			private int index;
			private STUDENT_IX(int n) { index = n; };
			public int getIndex() { return index; }
		}
		double getGpa();
		void setGpa(double gpa);
	}
	public static class Person implements PersonAPI{
		
		
		private int id;
		private int age;
		private String firstName;
		private String lastName;
		
		@Override
		public int getId() {
			// TODO Auto-generated method stub
			return id;
		}

		@Override
		public void setId(int id) {
			// TODO Auto-generated method stub
			this.id = id;
			
		}

		@Override
		public int convertAge(String s) {
			// TODO Auto-generated method stub
			Integer age = Integer.parseInt(s);
			return age;
		}

		@Override
		public int getAge() {
			// TODO Auto-generated method stub
			return age;
		}

		@Override
		public void setAge(int age) {
			// TODO Auto-generated method stub
			this.age = age;
		}

		@Override
		public String getFirstName() {
			// TODO Auto-generated method stub
			return firstName;
		}

		@Override
		public void setFirstName(String firstName) {
			// TODO Auto-generated method stub
			this.firstName = firstName;
		}

		@Override
		public String getLastName() {
			// TODO Auto-generated method stub
			return lastName;
		}

		@Override
		public void setLastName(String lastName) {
			// TODO Auto-generated method stub
			this.lastName = lastName;
		}

		@Override
		public String toCSVString() {
			// TODO Auto-generated method stub
			return null;
		}
		
	}
	
	public interface PersonFactoryAPI {
		
		public String getFirstName();
		public String getLastName();
	}
	/**
	 * [STUDENT TODO]
	 * 
	 * Student class
	 * for Student object creation
	 * 
	 */
	public static class Student implements StudentAPI{
			
		private double gpa;
		
		private Student (StudentBuilder studentBuilder) {
			this.gpa = studentBuilder.gpa;
		
		}
		
		public Student(double gpa) {
			this.gpa = gpa;
		}
		
		public void setGpa (double gpa) {
			this.gpa = gpa;
		}
		
		public double getGpa() {
			return gpa;
		}
		
		public void printGpaIndex() {
			int index = STUDENT_IX.GPA_IX.getIndex();
		}
	}
	 
	 

	
	/**
	 * [STUDENT TODO]
	 * 
	 * StudentBuilder class
	 * Student builder for Student object creation
	 * 
	 */
	public static class StudentBuilder{
		
		// parameters in Student class
		private double gpa;
		
		public StudentBuilder(double gpa) {
			this.gpa = gpa;
		}
		
		public Student build() {
			return new Student(this);
		}
	}

	
	/**
	 * [STUDENT TODO]
	 * 
	 * StudentFactory class
	 * Student Factory for Student objects
	 * 
	 */
	public static class StudentFactory implements PersonFactoryAPI{
		
		private double gpa;
		
		public void setGpa(double gpa) {
			this.gpa = gpa;
		}
		
		public static Student createStudent(double gpa) {
			return new Student(gpa);
		}

		@Override
		public String getFirstName() {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public String getLastName() {
			// TODO Auto-generated method stub
			return null;
		}
	}
	
	/**
	 * [STUDENT TODO]
	 * 
	 * StudentFactoryEnumSingleton class
	 * an Enum Singleton implementation for Student Factory
	 * 
	 */
	private enum StudentFactoryEnumSingleton {
		FACTORY;
		private PersonFactoryAPI instance = new StudentFactory();
		private StudentFactoryEnumSingleton() {}
		public PersonFactoryAPI getInstance() { return instance; }
	}
	
	/**
	 * [STUDENT TODO]
	 * 
	 * StudentFactoryEarlySingleton class
	 * a Early Singleton implementation for Student Factory
	 * 
	 */
	private static class StudentFactoryEarlySingleton {
		private static PersonFactoryAPI instance = new StudentFactory();
		private StudentFactoryEarlySingleton() {}
		public static PersonFactoryAPI getInstance() { return instance; }
	}
	
	/**
	 * [STUDENT TODO]
	 * 
	 * StudentFactoryLazySingleton class
	 * a Lazy Singleton implementation for Student Factory
	 * 
	 */
	private static class StudentFactoryLazySingleton {
		private static PersonFactoryAPI instance = null;
		private StudentFactoryLazySingleton() {}
		public static PersonFactoryAPI getInstance() {
			if ( null == instance) {
				synchronized (PersonFactoryLazySingleton.class) {
					if (null == instance) {
						instance = new StudentFactory();
					}
				}
			}
			return instance; 
		}
	}

	
	/**
	 * [STUDENT TODO]
	 * 
	 * CanvasStudentAPI interface
	 * use Adapter pattern adapt Blackboard Student CSV String to Canvas Student CSV String
	 * 
	 */

	
	/**
	 * [STUDENT TODO]
	 * 
	 * CanvasStudentAdapter class
	 * use Adapter pattern adapt Blackboard Student CSV String to Canvas Student CSV String
	 * 
	 */

	
	/**
	 * GIVEN:
	 * 
	 * use Strategy Pattern to curve GPA (-5%, -10%, etc.)
	 * 
	 */
	private interface GradeStrategy {
		DecimalFormat gpaFormat = new DecimalFormat("#.##");
		double curve(double gpa);
	}
	

	
	/**
	 * [STUDENT TODO:]
	 * 
	 * CurveUp1 Strategy Curve class implementing GradeStrategy
	 */

	
	/**
	 * [STUDENT TODO:]
	 * 
	 * CurveUp2 Strategy Curve class implementing GradeStrategy
	 */

	
	/**
	 * [STUDENT TODO:]
	 * 
	 * CurveDown1 Strategy Curve class implementing GradeStrategy
	 */

	
	/**
	 * [STUDENT TODO:]
	 * 
	 * CurveDown2 Strategy Curve class implementing GradeStrategy
	 */

	
	/**
	 * GIVEN:
	 * 
	 * GradeContext uses GradeStrategy objects to curve grades (GPA)
	 */
	private static class GradeContext implements Runnable {
		List<Student> studentList = new ArrayList<>();
		List<GradeStrategy> strategyList = new ArrayList<>();

		public void add(Student s) {
			studentList.add(s);
		}
		public void addStudents(List<Student> studentList) {
			this.studentList = studentList;
		}
		public void add(GradeStrategy s) {
			strategyList.add(s);
		}
		public void add(List<GradeStrategy> strategyList) {
			this.strategyList = strategyList;
		}
		@Override
		public void run() {
			System.out.println(studentList.size() + " students to curve");
			for (Student s : studentList) {
				System.out.println(strategyList.size() + " grade strategies");
				for (GradeStrategy gradeStrategy : strategyList) {
					System.out.print("GPA " + s.getGpa() + " => " + AbstractCurve.gpaFormat.format(gradeStrategy.curve(s.getGpa())));
					System.out.println(" (" + gradeStrategy + ")");
				}
			}
		}
	}
	

	/**
	 * GIVEN:
	 * 
	 * FlyweightCurveAbstractFactoryAPI implemented by every FlyweightCurve Abstract Factory creating Flyweight Curve objects
	 */
	private interface FlyweightCurveAbstractFactoryAPI {
		GradeStrategy getObject(CurveChoice c);
	}
	
	/**
	 * [STUDENT TODO:]
	 * 
	 * CurveFlyweight Flyweight Strategy Curve class implementing GradeStrategy
	 */
	public static class CurveFlyweight implements GradeStrategy {
		private double curveFactor = 0.0;
		public CurveFlyweight(CurveChoice curve) {
			super();
			this.curveFactor = curve.getIdex();
		}
		/**
		 * @param	context is curve percentage passed as flyweight extrinsic data
		 * @param	grade to curve using supplied context
		 */
		@Override
		public double curve(double grade) {
			return grade + grade*curveFactor;
		}
		@Override
		public String toString() {
			return "fw curve grade " + curveFactor;
		}
	}
	
	/**
	 * [STUDENT TODO:]
	 * 
	 * CurveAbstractFactory Flyweight Strategy Curve factory class
	 */

	
	/**
	 * [STUDENT TODO:]
	 * 
	 * CurveFlyweightEnumSingletonFactory Flyweight Strategy Curve Enum Singleton factory class
	 */


	/**
	 * GIVEN:
	 * 
	 * CourseAPI implemented by each Course object
	 */
	private interface CourseAPI {
		DecimalFormat costFormat = new DecimalFormat("##,###.##");
		String getDescription();
		int getCredits();
		double getCost();
	}


	/**
	 * [STUDENT TODO:]
	 * 
	 * CSYE6200 course class
	 */

	/**
	 * [STUDENT TODO:]
	 * 
	 * CSYE6202 course class
	 */

	/**
	 * [STUDENT TODO:]
	 * 
	 * CSYE6205 course class
	 */

	/**
	 * [STUDENT TODO:]
	 * 
	 * CSYE7374 course class
	 */

	/**
	 * [STUDENT TODO:]
	 * 
	 * INFO5100 course class
	 */

	
	/**
	 * [STUDENT TODO]
	 * 
	 * CourseDecoratorAdapter class to adapt CourseAPI objects to Course Decorators
	 * to have adapted Course decorate adapted Course object.
	 */

	
	/**
	 * GIVEN:
	 * 
	 * use Adapter pattern to convert Student Dan CSV String to Canvas CSV String
	 */
	public static void useAdapterPattern() {
		System.out.print("\n\t Canvas Student Adapter...");
		System.out.print("\"ID,AGE,FIRSTNAME,LASTNAME,GPA\" => \"ID,LASTNAME,FIRSTNAME,AGE,GPA\"");
		System.out.println();
		PersonAPI dan = StudentFactoryEarlySingleton.getInstance().getObject("2,17,Dan,Peters,3.9");
		System.out.println(dan.toCSVString());
		System.out.println(new CanvasStudentAdapter(dan).toCsvString());
	}
	
	/**
	 * 
	 * GIVEN:
	 * 
	 * use Decorator pattern and Adapter pattern to adapt Courses to CourseDecorators 
	 */
	public static void useDecoratorPattern() {
		System.out.println("\n\t Student Course Decorator...");
		PersonAPI dan = StudentFactoryEarlySingleton.getInstance().getObject("2,17,Dan,Peters,3.9");
		CourseAPI[] courseList = {
				new CSYE6200(),
				new CSYE6202(),
				new CSYE6205(),
				new CSYE7374(),
				new INFO5100()
		};
		
		CourseDecoratorAdapter cda = null;
		for (CourseAPI course : courseList) {
			cda = new CourseDecoratorAdapter(course, cda);
		}
		System.out.println(cda);
	}
	
	/**
	 * GIVEN:
	 * 
	 * use Singleton Factory pattern to create Student dan
	 * 
	 */
	public static void useFactoryPattern() {
		System.out.println("\n\t Student Singleton Factory...");
		List<PersonAPI> studentList = new ArrayList<>(
				Arrays.asList(
						StudentFactoryEnumSingleton.FACTORY.getInstance().getObject("2,17,Dan,Peters,3.9"),
						StudentFactoryEarlySingleton.getInstance().getObject("2,17,Dan,Peters,3.9"),
						StudentFactoryLazySingleton.getInstance().getObject("2,17,Dan,Peters,3.9")
				));
		for (PersonAPI student : studentList) {
			System.out.println(student);
		}
	}
	
	/**
	 * GIVEN:
	 * 
	 * use of the Flyweight Strategy pattern to curve GPA 
	 * 
	 * 	1. boost grade by 1 %
	 * 	2. boost grade by 2 %
	 * 	3. reduce grade by 1 %
	 * 	4. reduce grade by 2 %
	 */
	public static void useFlyweightPattern() {
		System.out.println("\n\t Student flyweight Curve Strategy for many algorithms to curve GPA by percent (+1,+2,-1,-2");
		PersonAPI dan = StudentFactoryEarlySingleton.getInstance().getObject("2,17,Dan,Peters,3.9");
		GradeStrategy[] strategyArray = {
				CurveFlyweightEnumSingletonFactory.INSTANCE.get().getObject(CurveChoice.ONE),
				CurveFlyweightEnumSingletonFactory.INSTANCE.get().getObject(CurveChoice.TWO),
				CurveFlyweightEnumSingletonFactory.INSTANCE.get().getObject(CurveChoice.PONE),
				CurveFlyweightEnumSingletonFactory.INSTANCE.get().getObject(CurveChoice.PTWO),
		};
		List<GradeStrategy> strategyList = Arrays.asList(strategyArray);
		System.out.println(strategyList.size() + " curves in strategy list");
		GradeContext context = new GradeContext();
		context.add((Student) dan);
		context.add(strategyList);
		context.run();	// curve grade
	}
	
	/**
	 * GIVEN:
	 * 
	 * use of the Strategy pattern to curve GPA 
	 * 
	 * 	1. boost grade by 1 %
	 * 	2. boost grade by 2 %
	 * 	3. reduce grade by 1 %
	 * 	4. reduce grade by 2 %
	 */
	public static void useStrategyPattern() {
		System.out.println("\n\t Student Curve Strategy...");
		PersonAPI dan = StudentFactoryEarlySingleton.getInstance().getObject("2,17,Dan,Peters,3.9");
		GradeStrategy[] strategyArray = {
				new CurveDown1(),
				new CurveDown2(),
				new CurveUp1(),
				new CurveUp2(),
		};
		List<GradeStrategy> strategyList = Arrays.asList(strategyArray);
		System.out.println(strategyList.size() + " curves in strategy list");
			GradeContext context = new GradeContext();
			context.add((Student) dan);
			context.add(strategyList);
			context.run();	// curve grade
	}

	/**
	 * GIVEN:
	 * 
	 * demonstrate the use of this class
	 * @param obj
	 */
	public static void demo() {
		System.out.println("\n\t" + SchoolMidterm.class.getName() + ".demo() [version " + VERSION + " ]...");
		
		SchoolMidterm obj = new SchoolMidterm();
		
		useAdapterPattern();
		useDecoratorPattern();
		useFactoryPattern();
		useFlyweightPattern();
		useStrategyPattern();
		
		System.out.println("\n\t" + SchoolMidterm.class.getName() + ".demo()... done!");
	}
}

