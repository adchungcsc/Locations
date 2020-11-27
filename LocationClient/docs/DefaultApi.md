# LocationApi.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/adchungcsc/LocationAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteLocation**](DefaultApi.md#deleteLocation) | **DELETE** /location/{locationName} | Delete a location
[**findAllLocations**](DefaultApi.md#findAllLocations) | **GET** /locations | Get all locations
[**findLocation**](DefaultApi.md#findLocation) | **GET** /location/{locationName} | Find a location
[**insertLocation**](DefaultApi.md#insertLocation) | **POST** /location/{locationName} | Insert a new location
[**updateLocation**](DefaultApi.md#updateLocation) | **PUT** /location/{locationName} | Update an existing location



## deleteLocation

> [Location] deleteLocation(locationName)

Delete a location

Get an individual location 

### Example

```javascript
import LocationApi from 'location_api';

let apiInstance = new LocationApi.DefaultApi();
let locationName = "locationName_example"; // String | Name of location to delete.
apiInstance.deleteLocation(locationName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationName** | **String**| Name of location to delete. | 

### Return type

[**[Location]**](Location.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findAllLocations

> [Location] findAllLocations()

Get all locations

Get all locations 

### Example

```javascript
import LocationApi from 'location_api';

let apiInstance = new LocationApi.DefaultApi();
apiInstance.findAllLocations((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Location]**](Location.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findLocation

> [Location] findLocation(locationName)

Find a location

Get an individual location 

### Example

```javascript
import LocationApi from 'location_api';

let apiInstance = new LocationApi.DefaultApi();
let locationName = "locationName_example"; // String | Name of location to look for.
apiInstance.findLocation(locationName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationName** | **String**| Name of location to look for. | 

### Return type

[**[Location]**](Location.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertLocation

> [Location] insertLocation(locationName, latitude, longitude)

Insert a new location

Insert a new location

### Example

```javascript
import LocationApi from 'location_api';

let apiInstance = new LocationApi.DefaultApi();
let locationName = "locationName_example"; // String | Name of location to look for.
let latitude = 3.4; // Number | latitude of location to look for.
let longitude = 3.4; // Number | longitude of location to look for.
apiInstance.insertLocation(locationName, latitude, longitude, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationName** | **String**| Name of location to look for. | 
 **latitude** | **Number**| latitude of location to look for. | 
 **longitude** | **Number**| longitude of location to look for. | 

### Return type

[**[Location]**](Location.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLocation

> updateLocation(locationName, description)

Update an existing location

Insert a new location

### Example

```javascript
import LocationApi from 'location_api';

let apiInstance = new LocationApi.DefaultApi();
let locationName = "locationName_example"; // String | Name of location to look for.
let description = "description_example"; // String | description of location
apiInstance.updateLocation(locationName, description, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationName** | **String**| Name of location to look for. | 
 **description** | **String**| description of location | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

