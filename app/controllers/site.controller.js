const db = require("../models");
const Floor = db.Floor;
const Site = db.Site;

exports.create = (req, res, next) => {

  // Create a Site
  const site = new Site({
  	siteName: req.body.siteName,
  	openingHours: req.body.openingHours,
    securityContact: req.body.securityContact,
    address: req.body.address,
    streetAddress: req.body.streetAddress,
    zipCode: req.body.zipCode,
    state: req.body.state,
    city: req.body.city,
    suburb: req.body.suburb,
    totalEmployees: req.body.totalEmployees
  });
  console.log(site);

  // Save Tutorial in the database

  Site.create(site)
  .then(data => {
  	return res.status(200).send(data);
  })
  .catch(err => {
  	return res.status(500).send({
  		message: err.message || "Some error occurred while creating the Site."
  	});
  });
};