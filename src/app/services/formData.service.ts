import { Injectable } from '@angular/core';

import { AccessmentReportData } from '../classes/AccessmentReportData';
// import { LocalStorageService } from './local-storage.service';

@Injectable()
export class FormDataService {

    private formData: AccessmentReportData;

    constructor(
        // private localStorageService: LocalStorageService
    ) {
        this.formData = new AccessmentReportData();
    }

    getFormData(): AccessmentReportData {
        // Return the entire Form Data
        // const localData = this.localStorageService.get();
        // if (localData !== null) {
        //     console.log(1);
        //     this.formData = localData;
        // }
        return this.formData;
    }

    setFormData(data: AccessmentReportData) {
        // set the entire Form Data
        this.formData = data;
    }

    clearFormData() {
        this.formData = new AccessmentReportData();
    }

    getFormDataByName(propertyName: string): any {
        return this.formData[propertyName];
    }

    setFormDataByName(propertyName: string, value: any) {
        this.formData[propertyName] = value;
        console.log(this.formData);
        // this.localStorageService.set(this.formData);
        // this.formData = this.localStorageService.get();
    }

    clearLocalStorage() {
        // this.localStorageService.clear();
    }

    // getPersonal(): Personal {
    //     // Return the Personal data
    //     const personal: Personal = {
    //         firstName: this.formData.firstName,
    //         lastName: this.formData.lastName,
    //         email: this.formData.email,
    //         gender: ['M', 'F']
    //     };
    //     return personal;
    // }

    // setPersonal(data: Personal) {
    //     // Update the Personal data only when the Personal Form had been validated successfully
    //     this.isPersonalFormValid = true;
    //     this.formData.firstName = data.firstName;
    //     this.formData.lastName = data.lastName;
    //     this.formData.email = data.email;
    //     // Validate Personal Step in Workflow
    //     this.workflowService.validateStep(STEPS.personal);
    // }

    // getWork(): string {
    //     // Return the work type
    //     return this.formData.work;
    // }

    // setWork(data: string) {
    //     // Update the work type only when the Work Form had been validated successfully
    //     this.isWorkFormValid = true;
    //     this.formData.work = data;
    //     // Validate Work Step in Workflow
    //     this.workflowService.validateStep(STEPS.work);
    // }

    // getAddress(): Address {
    //     // Return the Address data
    //     const address: Address = {
    //         street: this.formData.street,
    //         city: this.formData.city,
    //         state: this.formData.state,
    //         zip: this.formData.zip
    //     };
    //     return address;
    // }

    // setAddress(data: Address) {
    //     // Update the Address data only when the Address Form had been validated successfully
    //     this.isAddressFormValid = true;
    //     this.formData.street = data.street;
    //     this.formData.city = data.city;
    //     this.formData.state = data.state;
    //     this.formData.zip = data.zip;
    //     // Validate Address Step in Workflow
    //     this.workflowService.validateStep(STEPS.address);
    // }

    // getFormData(): FormData {
    //     // Return the entire Form Data
    //     return this.formData;
    // }

    // resetFormData(): FormData {
    //     // Reset the workflow
    //     this.workflowService.resetSteps();
    //     // Return the form data after all this.* members had been reset
    //     this.formData.clear();
    //     this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
    //     return this.formData;
    // }

    // isFormValid() {
    //     // Return true if all forms had been validated successfully; otherwise, return false
    //     return this.isPersonalFormValid &&
    //         this.isWorkFormValid &&
    //         this.isAddressFormValid;
    // }
}
