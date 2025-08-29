export interface Facility {
  id: number;
  name: string;
  dhicCode: string;
  facilityDepartmentId: string;
  facilityCategoryId: string;
  facilityTypeId: string;
  districtId: string;
  tehsilId: string;
  numberOfBeds: string;
  numberOfIncharges: string;
  inchargeContact: string;
  inchargeEmail: string;
  locationLatitude: string;
  locationLongitude: string;
  status: number;
  shift: number;
  coverImage: string;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;

  facilityDepartment: FacilityDepartment;
  district: District;
  tehsil: Tehsil;
  facilityType: FacilityType;
}
export interface FacilityDepartment {
  id: number;
  name: string;
  createdBy: string;
  updatedBy: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface District {
  id: number;
  name: string;
  regionId: string;
  divisionId: string;
  hcKey: string;
  createdBy: string;
  updatedBy: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Tehsil {
  id: number;
  name: string;
  divisionId: string;
  districtId: string;
  createdBy: string;
  updatedBy: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface FacilityType {
  id: number;
  name: string;
  facilityTypeCategory: string;
  facilityTypeDepartment: string;
  createdBy: string;
  updatedBy: string;
  isActive: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
