const sql = require('../../config/db.js');
console.log('Model-JS');

const Site = function(site){
	this.siteName = siteName,
  	this.openingHours = openingHours,
    this.securityContact = securityContact,
    this.address = address,
    this.streetAddress = streetAddress,
    this.zipCod = zipCode,
    this.state = state,
    this.city = city,
    this.suburb = suburb,
    this.totalEmployees = totalEmployees
};

Site.create = (newSite, result) => {
	sql.query('INSERT INTO sites SET ?', newSite, (err, res) => {
	if (err) {
		console.log('Error: ', err);
		result(err, null);
		return;
		}
	console.log("Created Site: ", { siteId: res.insertId, ...newSite });
    result(null, { siteId: res.insertId, ...newSite });
	});
};


module.exports = Site;