import React, { useState, useCallback, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useLazyQuery } from "@apollo/client";
import {
  GET_DISTRICTS_BY_PROVINCE,
  GET_PROVINCES,
  GET_SUBDISTRICTS_BY_DISTRICT,
  GET_POSTAL_CODE_BY_SUBDISTRICT,
} from "graphql/address/getAddress";
import { District, Province, Subdistrict } from "graphql/address/types";
import { InlineWrapper } from "../inline-wrapper";
import Spacer from "../spacer";

interface AddressAutocompleteProps {
  onAddressChange: (address: {
    province: string;
    district: string;
    subDistrict: string;
    postalCode: string;
  }) => void;
}

export const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  onAddressChange,
}) => {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(
    null
  );
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(
    null
  );
  const [selectedSubdistrict, setSelectedSubdistrict] =
    useState<Subdistrict | null>(null);
  const [selectedPostalCode, setSelectedPostalCode] = useState<number | null>(
    null
  );

  const [provinceInputValue, setProvinceInputValue] = useState<string>("");
  const [districtInputValue, setDistrictInputValue] = useState<string>("");
  const [subdistrictInputValue, setSubdistrictInputValue] =
    useState<string>("");
  const [postalCodeInputValue, setPostalCodeInputValue] = useState<string>("");

  // Lazy query to fetch Provinces when the dropdown is clicked
  const [fetchProvinces, { loading: loadingProvinces, data: provincesData }] =
    useLazyQuery<{ getProvinces: Province[] }>(GET_PROVINCES);

  // Fetch Districts based on selected Province
  const [fetchDistricts, { loading: loadingDistricts, data: districtsData }] =
    useLazyQuery<{ getDistrictsByProvince: District[] }>(
      GET_DISTRICTS_BY_PROVINCE,
      {
        variables: { provinceNameEn: selectedProvince?.provinceNameEn || "" },
      }
    );

  // Fetch Subdistricts based on selected District
  const [
    fetchSubdistricts,
    { loading: loadingSubdistricts, data: subdistrictsData },
  ] = useLazyQuery<{ getSubdistrictsByDistrict: Subdistrict[] }>(
    GET_SUBDISTRICTS_BY_DISTRICT,
    {
      variables: { districtNameEn: selectedDistrict?.districtNameEn || "" },
    }
  );

  // Fetch Postal Codes based on selected Subdistrict
  const [
    fetchPostalCodes,
    { loading: loadingPostalCodes, data: postalCodeData },
  ] = useLazyQuery<{ getPostalCodesBySubdistrict: number }>(
    GET_POSTAL_CODE_BY_SUBDISTRICT,
    {
      variables: { subdistrictCode: selectedSubdistrict?.subdistrictCode || 0 },
    }
  );

  // Utility function to get unique items by a key
  const getUniqueOptions = <T, K extends keyof T>(items: T[], key: K): T[] => {
    return Array.from(new Map(items.map((item) => [item[key], item])).values());
  };

  // Handle changes in Province selection
  const handleProvinceChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, value: Province | null) => {
      setSelectedProvince(value);
      setSelectedDistrict(null);
      setSelectedSubdistrict(null);
      setSelectedPostalCode(null);
      setDistrictInputValue(""); // Clear district input value when province changes
      setSubdistrictInputValue(""); // Clear subdistrict input value when province changes
      setPostalCodeInputValue(""); // Clear postal code input value when province changes
    },
    []
  );

  // Handle changes in District selection
  const handleDistrictChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, value: District | null) => {
      setSelectedDistrict(value);
      setSelectedSubdistrict(null);
      setSelectedPostalCode(null);
      setSubdistrictInputValue(""); // Clear subdistrict input value when district changes
      setPostalCodeInputValue(""); // Clear postal code input value when district changes
    },
    []
  );

  // Handle changes in Subdistrict selection
  const handleSubdistrictChange = useCallback(
    (
      event: React.SyntheticEvent<Element, Event>,
      value: Subdistrict | null
    ) => {
      setSelectedSubdistrict(value);
      setSelectedPostalCode(null);
      setPostalCodeInputValue(""); // Clear postal code input value when subdistrict changes
    },
    []
  );

  // Handle changes in Postal Code selection
  const handlePostalCodeChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, value: number | null) => {
      setSelectedPostalCode(value);
    },
    []
  );

  // Handle province input change
  const handleProvinceInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setProvinceInputValue(newInputValue);
  };

  // Handle district input change
  const handleDistrictInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setDistrictInputValue(newInputValue);
  };

  // Handle subdistrict input change
  const handleSubdistrictInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setSubdistrictInputValue(newInputValue);
  };

  // Handle postal code input change
  const handlePostalCodeInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setPostalCodeInputValue(newInputValue);
  };

  // Filter provinces based on input value
  const filteredProvinces =
    provincesData?.getProvinces.filter((province) =>
      province.provinceNameEn
        .toLowerCase()
        .startsWith(provinceInputValue.toLowerCase())
    ) || [];

  // Filter districts based on selected province and district input value
  const filteredDistricts =
    districtsData?.getDistrictsByProvince.filter((district) =>
      district.districtNameEn
        .toLowerCase()
        .startsWith(districtInputValue.toLowerCase())
    ) || [];

  // Filter subdistricts based on selected district and subdistrict input value
  const filteredSubdistricts =
    subdistrictsData?.getSubdistrictsByDistrict.filter((subdistrict) =>
      subdistrict.subdistrictNameEn
        .toLowerCase()
        .startsWith(subdistrictInputValue.toLowerCase())
    ) || [];

  // Filter postal codes based on selected subdistrict and postal code input value
  const filteredPostalCodes = postalCodeData
    ? [postalCodeData.getPostalCodesBySubdistrict].filter((postalCode) =>
        postalCode.toString().startsWith(postalCodeInputValue)
      )
    : [];

  useEffect(() => {
    if (selectedProvince) {
      fetchDistricts({
        variables: { provinceNameEn: selectedProvince.provinceNameEn },
      });
    }
  }, [selectedProvince, fetchDistricts]);

  useEffect(() => {
    if (selectedDistrict) {
      fetchSubdistricts({
        variables: { districtNameEn: selectedDistrict?.districtNameEn },
      });
    }
  }, [selectedDistrict, fetchSubdistricts]);

  useEffect(() => {
    if (selectedSubdistrict) {
      fetchPostalCodes({
        variables: { subdistrictCode: selectedSubdistrict?.subdistrictCode },
      });
    }
  }, [selectedSubdistrict, fetchPostalCodes]);
  useEffect(() => {
    if (selectedSubdistrict) {
      fetchPostalCodes({
        variables: { subdistrictNameEn: selectedSubdistrict.subdistrictNameEn },
      });
    }
  }, [selectedSubdistrict, fetchPostalCodes]);

  useEffect(() => {
    if (
      selectedProvince &&
      selectedDistrict &&
      selectedSubdistrict &&
      selectedPostalCode
    ) {
      onAddressChange({
        province: selectedProvince.provinceNameEn,
        district: selectedDistrict.districtNameEn,
        subDistrict: selectedSubdistrict.subdistrictNameEn,
        postalCode: selectedPostalCode.toString(),
      });
    }
  }, [
    selectedProvince,
    selectedDistrict,
    selectedSubdistrict,
    selectedPostalCode,
    onAddressChange,
  ]);

  return (
    <div style={{ width: "100%" }}>
      <InlineWrapper>
        {/* Province Dropdown */}
        <Autocomplete
          options={getUniqueOptions<Province, keyof Province>(
            filteredProvinces,
            "provinceNameEn"
          )}
          getOptionLabel={(option) => option.provinceNameEn}
          onChange={handleProvinceChange}
          onInputChange={handleProvinceInputChange}
          renderInput={(params) => (
            <TextField {...params} label="Province" variant="outlined" />
          )}
          fullWidth
          loading={loadingProvinces}
          onOpen={() => fetchProvinces()} // Fetch all provinces when dropdown is clicked
        />
        <Spacer x={24} />
        {/* District Dropdown */}
        <Autocomplete
          options={getUniqueOptions<District, keyof District>(
            filteredDistricts,
            "districtNameEn"
          )}
          getOptionLabel={(option) => option.districtNameEn}
          onChange={handleDistrictChange}
          onInputChange={handleDistrictInputChange}
          renderInput={(params) => (
            <TextField {...params} label="District" variant="outlined" />
          )}
          fullWidth
          loading={loadingDistricts}
          disabled={!selectedProvince}
        />
        <Spacer x={24} />
        {/* Subdistrict Dropdown */}
        <Autocomplete
          options={getUniqueOptions<Subdistrict, keyof Subdistrict>(
            filteredSubdistricts || [],
            "subdistrictNameEn"
          )}
          getOptionLabel={(option) => option.subdistrictNameEn}
          onChange={handleSubdistrictChange}
          onInputChange={handleSubdistrictInputChange}
          renderInput={(params) => (
            <TextField {...params} label="Subdistrict" variant="outlined" />
          )}
          fullWidth
          loading={loadingSubdistricts}
          disabled={!selectedDistrict}
        />
        <Spacer x={24} />
        {/* Postal Code Dropdown */}

        <Autocomplete
          options={filteredPostalCodes}
          getOptionLabel={(option) => option.toString()}
          onChange={handlePostalCodeChange}
          onInputChange={handlePostalCodeInputChange}
          renderInput={(params) => (
            <TextField {...params} label="Postal Code" variant="outlined" />
          )}
          fullWidth
          loading={loadingPostalCodes}
          disabled={!selectedSubdistrict}
        />
      </InlineWrapper>
    </div>
  );
};

export default AddressAutocomplete;
