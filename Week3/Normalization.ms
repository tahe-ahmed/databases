### 1- convert the table into 1NF :
⋅⋅   Columns must have atomic values . Also there must be unique name for both Attributes and Columns and in each column the values stored must be of the same kind or type.


| member_id     |  member_name  | member_address | dinner_id | dinner_date | venue_code | venue_description | food_code | food_description |
| ------------- |:-------------:|:--------------:|:---------:|:-----------:|:----------:|:-----------------:|:---------:|:----------------:|
|         1     | Amit          | 325 Max park   | D00001001 | 2020-03-15  | B01        | Grand Ball Room   | C1        | Curry            |
|         1     | Amit          | 325 Max park   | D00001001 | 2020-03-15  | B01        | Grand Ball Room   | C2        | Cake             |
|         2     | Ben           | 24 Hudson lane | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1        | Soup             |
|         2     | Ben           | 24 Hudson lane | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | C2        | Cake             |
|         3     | Cristina      | 516 6th Ave    | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1        | Soup             |
|         3     | Cristina      | 516 6th Ave    | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | C2        | Cake             |
|         4     | Dan           | 89 John St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1        | Pie	             |
|         4     | Dan           | 89 John St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | T1        | Tea              |
|         4     | Dan           | 89 John St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | M1        | Mousse           |
|         5     | Ema           | 91 Pixar St    | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1        | Pie	             |
|         5     | Ema           | 91 Pixar St    | D00001003 | 2020-03-20  | B03        | Goat Farm         | T1        | Tea	             |
|         5     | Ema           | 91 Pixar St    | D00001003 | 2020-03-20  | B03        | Goat Farm         | M1        | Mousse           |
|         6     | Fatima        | 56 8th Ave     | D00001004 | 2020-03-20  | B04        | Mama's Kitchen    | F1        | Falafal          |
|         6     | Fatima        | 56 8th Ave     | D00001004 | 2020-03-20  | B04        | Mama's Kitchen    | M1        | Mousse           |
|         7     | Gabor         | 54 Vivaldi St  | D00001005 | 2020-02-20  | B05        | Hungry Hungary    | G1        | Goulash          |
|         7     | Gabor         | 54 Vivaldi St  | D00001005 | 2020-02-20  | B05        | Hungry Hungary    | P2        | Pasca            |
|         8     | Hema          | 9 Peter St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1        | Pie              |
|         8     | Hema          | 9 Peter St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | T1        | Tea	             |
|         8     | Hema          | 9 Peter St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | M1        | Mousse           |

---

### Super key :
    member_name,member_address,dinner_id,food_code
	  member_address,dinner_id,venue_code,food_code
    member_id,dinner_id,food_code
###   Candidate key:
	member_address,member_name,dinner_id
	member_address,dinner_id,food_code
	member_Address,venue_code,food_code
	member_id,dinner_id
###   Primary key :
	member_id,dinner_id
  

---

### 2 - 2NF TABLE
   First : The table should be in the First Normal Form.
   Second : There should be no Partial Dependency.
   
| member_id | member_name   | member_address | dinner_id | venue_code  |        
|-----------|:-------------:|:--------------:|:---------:|:-----------:|
|         1 | Amit          | 325 Max park   | D00001001 |  B01        | 
|         1 | Amit          | 325 Max park   | D00001001 |  B01        |
|         2 | Ben           | 24 Hudson lane | D00001002 |  B02        |
|         2 | Ben           | 24 Hudson lane | D00001002 |  B02        |
|         3 | Cristina      | 516 6th Ave    | D00001002 |  B02        |
|         3 | Cristina      | 516 6th Ave    | D00001002 |  B02        |
|         4 | Dan           | 89 John St     | D00001003 |  B03        | 
|         4 | Dan           | 89 John St     | D00001003 |  B03        | 
|         4 | Dan           | 89 John St     | D00001003 |  B03        | 
|         5 | Ema           | 91 Pixar St    | D00001003 |  B03        | 
|         5 | Ema           | 91 Pixar St    | D00001003 |  B03        | 
|         5 | Ema           | 91 Pixar St    | D00001003 |  B03        | 
|         6 | Fatima        | 56 8th Ave     | D00001004 |  B04        | 
|         7 | Gabor         | 54 Vivaldi St  | D00001005 |  B05        | 
|         7 | Gabor         | 54 Vivaldi St  | D00001005 |  B05        | 
|         8 | Hema          | 9 Peter St     | D00001003 |  B03        | 
|         8 | Hema          | 9 Peter St     | D00001003 |  B03        | 
|         8 | Hema          | 9 Peter St     | D00001003 |  B03        |


| food_code | food_description |
|-----------|:----------------:|
| C1        | Curry            |
| C2        | Cake             |
| F1        | Falafal          |
| M1        | Mousse           |
| S1        | Soup             |
| P1        | Pie              |
| P2        | Pasca            |
| T1        | Tea              |
| G1        | Goulash          |
                    
                    
---
                                                           
