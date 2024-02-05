<?php
try{
 $sum=0;  $rnum=0; $Record=array();
 $Record[]=$_POST["userName"]; $Record[]=$_POST["mail"]; $Record[]=$_POST["pass"]; $Record[]=$_POST["DOB"]; $Record[]=$_POST["subs"]; 
 for($i=0;$i<5;$i++) { if(empty($Record[$i])) $sum=$sum+1; }
 if($sum!=0) include("./views/Error.php");
 else{
    $MySqlPass="KAMEHAMEHA"; $DbName="NEWS";
    $conn=new mysqli("localhost","darkmortal",$MySqlPass,$DbName);
    $SELECT="select *from SUBSCRIBERS where Email='".$Record[1]."' OR UserName='".$Record[0]."';";
    $stmn=$conn->prepare($SELECT);
    $stmn->execute();
    $stmn->store_result();
    $rnum=$stmn->num_rows; $stmn->close();
    if($rnum==0){
       $INSERT="insert into SUBSCRIBERS (UserName,Email,Password,DOB,Subscription) values ('".$Record[0]."','".$Record[1]."','".$Record[2]."','".$Record[3]."','".$Record[4]."');";
       $stmt=$conn->prepare($INSERT);
       $stmt->execute(); $stmt->close();
       include("./views/Success.php");
    }else include("./views/Warning.php");
 }
}catch(Exception $e){
   echo $e->errorMessage();
}
?>
