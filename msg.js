
var message = {
    statusCode : {
        'OK': 200,
        'ACCEPTED' : 202,
        'MOVED_PERMENENTLY': 301,
        'BAD_REQUEST': 400,
        'FORBIDDEN': 403,
        'NOT_FOUND': 404,
        'USER_ALREADY_EXIST':409,
        'INTERNAL_SERVER_ERROR': 500,
        'BAD_GATEWAY': 502
    },

    message : {
        'TOKEN_GENERATED':'Token generated',
        'TOKEN_NOT_FOUND':'Token not found',
        'EMAIL_EXISTED':'Email Already Existed',
        'USER_REG_SUCC':'User Registered Successfully',
        'ALL_FIELDS_REQ':'All fields required!',
        'INVALID_CRED': 'Invalid Credentials',
        'AUTHENTICATION_SUCC': 'Authentication Successful',
        'PASSWORD_MISMATCH': 'Password Mismatch',
        'PROD_ADDED_SUCC': 'Product Added Successfully',
        'PROD_FETCH_SUCC':'Product Fetched Successfully',
        'INVALID_PROD_ID': 'Invalid product id',
        'PROD_FETCH_FAIL': 'Product Fetching failed!',
        'PROD_DEL_SUCC': 'Product Deleted Successfully',
        'RECORED_UPDATE_SUCC': 'Record Updated Successfully',
        'RECORED_UPDATE_FAIL': 'Record Updatation Failed',
        'REVIEW_ADD_SUCC':'Review added successfully',
    }
}

module.exports = message;