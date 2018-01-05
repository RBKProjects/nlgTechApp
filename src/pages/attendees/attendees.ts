import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { Subscription } from 'rxjs/Subscription';
import { PersonInfoPage } from '../person-info/person-info';


@Component({
  selector: 'page-attendees',
  templateUrl: 'attendees.html',
})
export class AttendeesPage {

  private usersObservable: Subscription;
  users = [];
  filteredUsers = [];
  searchQuery = '';

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usersProvider: UsersProvider
  ) {
    this.getUsers();
  }

  filterUsers() {
    if(this.searchQuery!='') {
      this.filteredUsers = this.users.filter(query => query.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) || query.lastName.includes(this.searchQuery.toLowerCase()));
    this.sortUsers();      
    } else {
      this.filteredUsers = this.users;
    this.sortUsers();      
    }
  }

  filterBy(){

    if (this.searchQuery === "name"){
      console.log('name')
    }
    if (this.searchQuery === "organization"){
      console.log('organization')
    }
    if (this.searchQuery === "position"){
      console.log('position')
    }
    if (this.searchQuery === "organizationYouWork"){
      console.log('organizationYouWork')
    }

  }
    

  sortUsers() {
    this.users = this.users.sort((a,b) => b.firstName - a.firstName);
    this.filteredUsers = this.filteredUsers.sort((a,b) => b.firstName - a.firstName);
  }

  getUsers() {
    this.usersObservable = this. _usersProvider.getAttendees().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
   });
  }

  showPerson(person) {
    this.navCtrl.push(PersonInfoPage, {person: person});
  }
  
  ionViewWillLeave() {
    if(!!this.usersObservable) {
      this.usersObservable.unsubscribe();
    }
  }
}
