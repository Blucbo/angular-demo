import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {IUser} from '../../model/user.model';
import {UsersService} from '../../services/users.service';
import {SearchNameEmailPipe} from '../../pipes/search-name-email.pipe';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [SearchNameEmailPipe]
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'birthYear'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private usersService: UsersService,
              private searctPipe: SearchNameEmailPipe) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.usersService.getUsers());
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, filter) => this.searctPipe.transform(data, filter);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
