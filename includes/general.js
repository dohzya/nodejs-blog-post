var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

exports.getDate = getDate
function getDate(post) {
    var date = post.getDate('post.date')
    var suffix = ''
    switch (date.getUTCDate().toString().substr(date.getUTCDate().toString().length - 1)) {
        case '1':
            suffix = 'st';
            break;
        case '2':
            suffix = 'nd';
            break;
        case '3':
            suffix = 'rd';
            break;
        default :
            suffix = 'th'
    }

    if (date) {
        var formatedDate = month_names_short[date.getUTCMonth()] + ', ' + date.getUTCDate() + suffix + ' '+ date.getUTCFullYear()
        return formatedDate
    }
}

exports.firstStructuredTextsFromSlices = firstStructuredTextsFromSlices

function firstStructuredTextsFromSlices(slices) {
    return slices.filter(function(slice) {
        return slice.sliceType == 'text'
    })[0].value
}