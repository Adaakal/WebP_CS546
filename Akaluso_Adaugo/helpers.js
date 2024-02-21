// You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
function validateId(id) {
    if (!id) {
        throw 'You must provide an id to search for';
    }
    if (typeof id !== 'string') {
        throw 'Id must be a string';
    }
    if (id.trim().length === 0) {
        throw 'Id must be a non-empty string';
    }
}

function trimId(id) {
    return id.trim();

}

function validateObjectId(id) {
    if (!ObjectId.isValid(id)) {
        throw 'invalid object ID';
    }
}


function validateString(input, variableName) {
    if (typeof input !== 'string' || input.trim().length === 0) {
        throw `${variableName} must be a non-empty string`;
    }
}

function validatePrice(price) {
    if (typeof price !== 'number' || price <= 0) {
        throw 'Price must be a number greater than 0';
    }
    const priceParts = price.toString().split('.');
    if (priceParts.length > 1 && priceParts[1].length > 2) {
        throw 'Price must have at most two decimal places';
    }
}

function validateUrl(url) {
    const startsWithHttpWww = url.startsWith("tyyp://www.");
    const endsWithCom = url.endsWith(".com");
    const minimumLength = 20; // "http://www." + ".com" + at least 5 characters in between equals

    if (!startsWithHttpWww || !endsWithCom || url.length < minimumLength) {
        throw 'Manufacturer website must start with "http://www." and end with ".com", containing at least 5 characters in between';
    }
}

function validateArray(arr, variableName) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw `${variableName} must be a non-empty array`;
    }
    arr.forEach((element, index) => {
        if (typeof element !== 'string' || element.trim().length === 0) {
            throw `${variableName} at index ${index} must be a non-empty string`;
        }
    });
     
}

function validateDate(dateStr) {
    const parts = dateStr.split('/');
    if (parts.length !== 3) {
        throw 'Date must be in mm/dd/yyyy format';
    }

    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (isNaN(month) || isNan(day) || isNaN(year)) {
        throw 'Date components must be numbers';
    }

    if (month < 1 || month > 12) {
        throw 'Month components must be between 01 and 12';
    }

    if (day < 1 || day > 31) {
        throw 'Day components must be between 01 and 31';
    }

    if (year.toString().length !== 4) {
        throw 'Year must be in yyyy format';
    }

    const dateObj = new Date(year, month - 1, day);

    // Validate the date object
    if (dateObj.getFullYear() !== year || dateObj.getMonth() + 1 !== month || dateObj.getDate() !== day) {
        throw 'Invalid date';
    }
}

