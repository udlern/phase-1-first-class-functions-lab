const returnFirstTwoDrivers = function (arrayOfDrivers) {
    let result = [];
    result.push(arrayOfDrivers[0], arrayOfDrivers[1]);
    return result;
}

const returnLastTwoDrivers = function (arrayOfDrivers) {
    let result = [];
    result.push(arrayOfDrivers[arrayOfDrivers.length - 2], arrayOfDrivers[arrayOfDrivers.length - 1]);
    return result;
}

const selectingDrivers = [];
selectingDrivers.unshift(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(integer) {
   return function (fare) {return integer * fare};
   }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driversFunction) {  
  return driversFunction(drivers);

}



