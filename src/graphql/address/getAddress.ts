import { gql } from "@apollo/client";
export const GET_PROVINCES = gql`
  query GetProvinces($name: String) {
    getProvinces(name: $name) {
      provinceCode
      provinceNameEn
    }
  }
`;

export const GET_DISTRICTS_BY_PROVINCE = gql`
  query GetDistrictsByProvince($provinceNameEn: String!) {
    getDistrictsByProvince(provinceNameEn: $provinceNameEn) {
      districtCode
      districtNameEn
    }
  }
`;

export const GET_SUBDISTRICTS_BY_DISTRICT = gql`
  query GetSubdistrictsByDistrict($districtNameEn: String!) {
    getSubdistrictsByDistrict(districtNameEn: $districtNameEn) {
      subdistrictCode
      subdistrictNameEn
    }
  }
`;

export const GET_POSTAL_CODE_BY_SUBDISTRICT = gql`
  query GetPostalCodesBySubdistrict($subdistrictNameEn: String!) {
    getPostalCodesBySubdistrict(subdistrictNameEn: $subdistrictNameEn)
  }
`;
