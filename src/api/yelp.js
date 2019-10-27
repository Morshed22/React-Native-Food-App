import  axios from 'axios';

export  default  axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer bTznO3uy2d8ZsbrvUHFiMR_Dok3RDkCpYW-rZf2NSwH6qwFNQ-TkTrdZSczZa56jHjHXbeKS8j5abBM_RV4dpL6P8R9A6SqD0mt9Gcn0boS9DIJ7H-1EZoB_We-tXXYx'
    }
});