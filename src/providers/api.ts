/* eslint-disable max-len */
import axios from './apiConfig';
import queryString from 'query-string';

export interface IScholarshipsResponse {
    full_price?: number,
    price_with_discount?: number,
    discount_percentage?: number,
    start_date?: Date,
    enrollment_semester?: number,
    enabled?: boolean,
    course?: {
      name?: string,
      kind?: string,
      level?: string,
      shift?: any
    },
    university?: {
      name?: string,
      score?: number,
      logo_url?: string,
    },
    campus?: {
      name?: string,
      city?: string
    }
}

interface IAxiosGetAllScholarships {
    data: IScholarshipsResponse[]
  }

export const getAllScholarships = async (): Promise<IAxiosGetAllScholarships> => {
  const axiosResponse = await axios().get('/scholarships');
  const scholarshipsData: IScholarshipsResponse[] = axiosResponse.data;
  return {
    data: scholarshipsData,
  };
};

export const getFilteredScholarships = async (city, course, price): Promise<IAxiosGetAllScholarships> => {
  const params = queryString.stringify({city: city});
  const axiosResponse = await axios().get(`/scholarships/${params}`);
  const scholarshipsData: IScholarshipsResponse[] = axiosResponse.data;
  return {
    data: scholarshipsData,
  };
};
