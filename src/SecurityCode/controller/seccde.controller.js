const fs = require('fs');
const moment = require('moment');

exports.decryptlstcom =  async (req, res, next) => {
    
  const lst = require('../enums/securitycode-enum.js');
  const lstcom = require('../controller/_funcLstvDecrypt');
  const seccde = require('../controller/_securitycode.js');

  const dateNow = moment().format('MM/DD/YYYY hh:mm:ss A');

  if (req.body.createposfile) {
    const response = {
      encrypted: '',

    };
    response.encrypted = seccde.encryptData(seccde.formatData({
      serialno: '819-166323',
      expdte: dateNow,
      lastuse: dateNow
    }));

    res.send(response);
  } else {

    console.log(req.body);
    const ischeck = req.body.ischeck;

    // const serialno = `819-${req.body.imei.substr(-6)}`;
    const serialno = seccde.getSerial(req.body.imei);

    const _lstcomfile = lstcom.DecryptLSTCom(lst.LST_OPTIONS.LSTCOMPATH);

    const _lstposfile = seccde.parseData(seccde.decryptData(req.body.lstpos));

    const response = {
      incorrect: false,
      expired: false,
      override: false,
      missing: false,
      expiring: false,
      serial: false,
      invalidcode: false,
      lstcom: {},
      lstpos: {},
      expiringDays: 0,
      message: '',
      reqister: false,
      warningcode1: '',
      expringdate: '',
      encrypted: '',
    };

    let comcde = "SAMPLE COMPANY";
    // await db.lst_respos_companyfile.findAll({
    //   where: {
    //     recid: 1
    //   }
    // }).then(e => {
    //   comcde = e[0].dataValues.comcde;

    // });

    response.lstcom['company_no'] = _lstcomfile[1];
    response.lstpos['serialno'] = serialno;
    const lastuse = moment(_lstposfile.lastuse).format('MM/DD/YYYY hh:mm:ss A');

    const expdte = moment(_lstposfile.expdte).format('MM/DD/YYYY hh:mm:ss A');

    const expyear = new Date(expdte).getFullYear().toString().substr(-2);
    response.warningcode1 = `${[moment(expdte).format("MM"), "001", moment(expdte).format("DD"), "001", expyear].join('-')}`;

    if (ischeck) {
      if (serialno !== _lstposfile.serialno) {
        response.serial = true;
      }

      if (moment(lastuse).isAfter(dateNow)) {
        response.override = true;
      }
      //SUBSCRIPTION EXPIRED
      if (moment(dateNow).isSameOrAfter(expdte)) {
        response.expired = true;
      }

      if (_lstcomfile[0] !== comcde) {
        response.incorrect = true;
      }


      if (!response.missing && !response.override && !response.expired && !response.serial && !response.incorrect) {
        const diff = moment.duration(moment(dateNow).diff(expdte));
        const expringDays = moment(expdte).diff(dateNow, 'days');

        if (expringDays <= 30) {
          response.expiring = true;
        }

        response.warningcode1 = `${[moment(expdte).format("MM"), "001", moment(expdte).format("DD"), "001", expyear].join('-')}`;
        response.expringdate = moment(expdte).format("MM/DD/YYYY");
        response.passed = true;

        // await db.lst_respos_companyfile.update({
        //   comcde: _lstcomfile[0],
        //   comdsc: _lstcomfile[0]
        // }, {
        //   where: {
        //     recid: 1
        //   }
        // });

        // await db.lst_respos_headerfile.update({
        //   taxpayer: _lstcomfile[0]
        // }, {
        //   where: {
        //     recid: 1
        //   }
        // });

      } else {
        let expyear1 = new Date(dateNow).getFullYear().toString().substr(-2);
        response.warningcode1 = `${[moment(dateNow).format("MM"), "001", moment(dateNow).format("DD"), "001", expyear1].join('-')}`;

        response.encrypted = seccde.encryptData(seccde.formatData({
          serialno: serialno,
          expdte: dateNow,
          lastuse: dateNow
        }));
      }

    } else {

      let _seccde = req.body.seccde;
      let securitycde = lstcom.js_decrypt(_seccde);
      console.log(securitycde);

      let seccde_expiry = securitycde.substr(0, 6);
      let seccde_limit1 = securitycde.substr(6, 3);
      let seccde_limit2 = securitycde.substr(9, 3);
      let seccde_serialno = securitycde.substr(12, 9);
      let seccde_companyno = securitycde.substr(21, 6);

      seccde_serialno = seccde_serialno.substr(0, 3) + "-" + seccde_serialno.substr(3, 6);

      seccde_expiry = seccde_expiry.match(/.{1,2}/g).join('-');


      console.log("Expiration: " + seccde_expiry);
      console.log("Serial No.: " + seccde_serialno);
      console.log("Company No.: " + seccde_companyno);

      const _expdte = moment(seccde_expiry).format('MM/DD/YYYY hh:mm:ss A');

      if (serialno !== seccde_serialno || !moment(_expdte).isAfter(dateNow)) {
        response.invalidcode = true;
        response.message = 'Invalid Security Code';
      } else {

        response.encrypted = seccde.encryptData(seccde.formatData({
          serialno: serialno,
          expdte: _expdte,
          lastuse: dateNow
        }));

        response.reqister = true;
        response.invalidcode = false;
        response.message = 'Registered!';
        response.passed = true;
        response.lstcom['company_code'] = _lstcomfile[0];
        response.expringdate = seccde_expiry;

        // await db.lst_respos_companyfile.update({
        //   comcde: _lstcomfile[0],
        //   comdsc: _lstcomfile[0]
        // }, {
        //   where: {
        //     recid: 1
        //   }
        // });

        // await db.lst_respos_headerfile.update({
        //   taxpayer: _lstcomfile[0]
        // }, {
        //   where: {
        //     recid: 1
        //   }
        // });

      }

    }

    res.send(response);

  }

};