geoip2.country((location) => {
	if(location.country.iso_code === 'CN') {
    window.location.href = '//www.fantem.cn'
	}
}, (error) => {
})