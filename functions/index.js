import {
    $
} from 'jquery';

let promise = $.get("http(s)://5ba5ebcfe04d5100148d29aa.mockapi.io/:endpoint");

promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);