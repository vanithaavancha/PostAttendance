import { Component, OnInit } from '@angular/core';
import { AttendanceService, AttendanceDO } from '../attendance.service';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-postattendance',
  templateUrl: './postattendance.component.html',
  styleUrls: ['./postattendance.component.css']
})
export class PostattendanceComponent implements OnInit {
  departments: [];
  classes: [];
  subjects: [];
  AttendanceTypes:[];
  AttendanceForm: FormGroup;
  selected = 'Select';
  selected1 = 'Select';
  selected2 = 'Select';
  //selectedAtten 

  dtAttendance: MatTableDataSource<any>;
  intNoRecords: number;
  displayedColumns = ['index','FirstName', 'AdmissionNumber', 'column1'];

  constructor(private _service: AttendanceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    // debugger;
    this.AttendanceForm = this.formBuilder.group({
      //ddlDept: this.formBuilder.array([], Validators.required),
      // ddlDept:new FormArray([],Validators.required),
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      ddlDept: ['', Validators.required],
      ddlClass: ['', Validators.required],
      ddlSubject: ['', Validators.required],
    });
    this._service.getDepartments().subscribe((data: any) => {
      console.log('data is -' + data);
      this.departments = data;
      //  console.log('departments :'+this.departments);
      console.log('departments :' + this.departments.length);
      // this.addDepartments();

    });
  }
  // private addDepartments() {
  //   this.departments.map((o, i) => {
  //     const control = new FormControl(i === 0); // if first item set to true, else false
  //     (this.AttendanceForm.controls.ddlDept as FormArray).push(control);
  //   });
  //}
  onSubmit() {
    if (this.AttendanceForm.invalid) {
      return;
    }
    else {
      // alert('valid form');
      console.log('valid form');
      console.log(this.AttendanceForm.controls.startdate);
      debugger;
      var _AttendanceDOObj: AttendanceDO = new AttendanceDO();
      _AttendanceDOObj.InstanceClassificationId = Number(this.selected);
      _AttendanceDOObj.InstanceSubClassificationId = Number(this.selected1);
      _AttendanceDOObj.InstanceID = 604;
      _AttendanceDOObj.StartDate = '2019-06-27 00:00:00'; // this.AttendanceForm.controls.startdate.value;
      _AttendanceDOObj.ExpiryDate = '2019-06-27 00:00:00'; // this.AttendanceForm.controls.enddate.value;
      _AttendanceDOObj.ColumnString = "[27/06/2019] as column1,[dbo].[fn_Get_AttendanceActivity](UserId,736,'27/06/2019',NULL) as DisplayIcon1,[dbo].[fn_Get_AttendanceId](UserId,736,'27/06/2019',NULL) as AttendanceId1,NULL as column2,0 as DisplayIcon2,NULL as AttendanceId2,NULL as column3,0 as DisplayIcon3,NULL as AttendanceId3,NULL as column4,0 as DisplayIcon4,NULL as AttendanceId4,NULL as column5,0 as DisplayIcon5,NULL as AttendanceId5,NULL as column6,0 as DisplayIcon6,NULL as AttendanceId6,NULL as column7,0 as DisplayIcon7,NULL as AttendanceId7";
      _AttendanceDOObj.DateString = "[27/06/2019],[28/06/2019],[29/06/2019],[30/06/2019],[01/07/2019],[02/07/2019],[03/07/2019]";
      _AttendanceDOObj.SubjectSlotID = Number(this.selected2);
      _AttendanceDOObj.PeriodId = null;
      _AttendanceDOObj.LabBatchId = null;
      _AttendanceDOObj.SplAttendance = true;
      _AttendanceDOObj.UserName = null;
      _AttendanceDOObj.FirstName = null;
      _AttendanceDOObj.LastName = null;
      _AttendanceDOObj.UserCode = null;



      this._service.getAttendanceForm(_AttendanceDOObj).subscribe((data: any) => {
        console.log('Attendance records count - ' + data.length);
        console.log('Attendance records - ' + data);

        this.dtAttendance = new MatTableDataSource(data);
        this.intNoRecords = this.dtAttendance.data.length;
      });

    }
  }
  DepartmentChangeAction(selected: number) {
    // debugger;
    this._service.getClasses(selected).subscribe((data: any) => {
      console.log('data is -' + data);
      this.classes = data;
      //  console.log('departments :'+this.departments);
      console.log('classes :' + this.classes.length);
      // this.addDepartments();

    });

  }
  ClassChangeAction(selected: number, selected1: number) {
    // debugger;
    this._service.getSubjects(selected, selected1).subscribe((data: any) => {
      console.log('data is -' + data);
      this.subjects = data;
      //  console.log('departments :'+this.departments);
      console.log('subjects :' + this.subjects.length);
      // this.addDepartments();

    });

  }
  BindAttendanceTypes(){
    debugger;
    this._service.getAttendanceTypes().subscribe((data: any) => {
      console.log('Attendance Types are -' + data);
      this.AttendanceTypes = data;
       // console.log('Attendance Types :'+this.AttendanceTypes);
      console.log('Attendance Types Count:' + this.AttendanceTypes.length);
      // this.addDepartments();

    });
  }
  checkboxLabel(ip : any): boolean {
    //debugger;
    var isChecked: boolean = false;
    
      if (ip.column1 == 1)
        isChecked = true;
      else
        isChecked = false;

    
    return isChecked;

  }


}
