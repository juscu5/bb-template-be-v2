const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "employeefile",
    {
      "13thadjamt": {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      "13thbasis": {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      "13thdivisor": {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      "13thfactor": {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      "13thmonth": {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      "13thprevious": {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      "13thremarks": {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      "2316secondaryer": {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      account: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      accountcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      acrno: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      addtaxexemp: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      adgsisec: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      adgsislee: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      adgsisler: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      adgsisree: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      adgsisrer: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      adminper_fee: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      ad_usrcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      age: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      appcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      app_active: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      arecde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      atmprefix: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      atmsup: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
      bankcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      barangay: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      batchcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      batchdsc: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      birthplace: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      birth_prov: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      bnkacttypcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      branchcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      branchcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      b_day_1: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      b_day_10: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      b_day_2: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      b_day_3: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      b_day_4: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      b_day_5: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      b_day_6: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      b_day_7: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      b_day_8: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      b_day_9: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      cardcode: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      case_emer: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      cashbond: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      catcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      celnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      chkminwage: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
      citycde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      civilstatus: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      classcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      colcourse: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      colschool: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      colyear: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      comcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      companycode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      computationtype: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      computegsis: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      computeph: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      computepi: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      computesss: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      computetax: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      contractissued: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      converd1: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      converd2: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      costcenter: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      costgrpcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      has_essacc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      countrycde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      cstcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ctncode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      curcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      cuscat: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      dailygsis: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dailyhrs: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      dailyph: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dailypi: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dailyrate: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      dailyratefor: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      dailyratefor_bill: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      dailyrate_bill: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      dailyrate_laborcost: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      dailysss: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dailytax: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dateissued: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      depend_1: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      depend_10: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      depend_2: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      depend_3: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      depend_4: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      depend_5: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      depend_6: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      depend_7: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      depend_8: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      depend_9: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      deptcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      deptcode2: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      deptdescription2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      divcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      dl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dlexpdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      dllinc: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      drugtest: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      ec: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      elemschool: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      elemyear: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      email: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      emer_add: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      emer_tel: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      empadd1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empadd2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empadd3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empatmacttyp: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      empatmamt: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      empatmmethod: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empatmno: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      empatmno2: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      empatmtyp1: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empatmtyp2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empcatcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empcatdsc: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      empclasscde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empclassdsc: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      empcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      empcomcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empext: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empgsisno: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      empno: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      emppass: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empperyos: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      empper_add1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empper_add2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empper_add3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empper_citycde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empper_provcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empphno: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      emppic: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      emppic1: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      emppic2: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      emppic3: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      emppino: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      emppos: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      empprefix: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      empsssno: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      empstats: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      empstatus: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      empstatus2: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      empsuffix: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      emptin: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      emptitle: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      emptyp: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      emptypcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      empyos: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      empzipcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      emp_citycde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      emp_provcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      estbenefits: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      estcontri: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      estexempt: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      estfixtax: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      estpayrollperiods: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      esttaxable: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      esttotalincome: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      estyearlytax: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      expectedstartsal: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      expirydate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      eyecolor: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      fathername: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      faxnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      fbacc: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      fixgsis: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      fixph: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      fixpi: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      fixsss: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      fixtax: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      fname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      foccupation: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      friendrel: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      friendrelinrel: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      fullname: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      f_2316wifedep: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      gpsloc: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      gpsloccde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      gracourse: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      graschool: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      grayear: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      grpcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      grpdesc: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      gsisec: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      gsislee: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      gsisler: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      gsisree: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      gsisrer: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      height: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      highschool: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      highyear: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hiredate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      idtypcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      inc13th: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      includeatm: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
      incmass: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      inctkm: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "Y",
      },
      indcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      infapply: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      infapplyinrel: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      insurance: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      insuranceexpdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      insurancelinc: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      interest: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      iq: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      is_onboarding: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      jo_docnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      lname: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      loccde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      locmap: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      locnum: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      maritalstatus: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      marriedtype: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      medee: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      meder: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      medical: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      mname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      moccupation: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      monthlyrate: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      monthlyrate2: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      monthlyratefor: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      monthlyratefor_bill: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      monthlyrate_bill: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      monthlyrate_laborcost: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      monthlytodaily: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      mothermaidenname: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      mothername: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      multiprj: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      natcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      nbi: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      newempcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      notifybyemail: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      officeemail: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      officetelnum: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      oldempcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      onboarding_dte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      onboarding_enddte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      onboarding_status: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      otheraddress: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      pagnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      paycycle: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      paygroup: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      pdfpw: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      peraaid: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      perempadd1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      perempadd2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      perotheraddress: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      perwithwhom: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      per_arecde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      per_countrycde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      per_region: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      pfmem: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      pfmem2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      pfmem3: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      pfmem4: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      pfmem5: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      pic1: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      pic2: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      piee: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      pier: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      placeofbirth: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      placeofbirth2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      police: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      poscode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      posdesc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      precom13th: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomadd1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      precomadd2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      precomadd3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      precombasic: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomdeminimis: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomdm: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomfname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      precomgross: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomgrossinc: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomhazardpay: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomholpay: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomlname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      precommname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      precomname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      precomname2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      precomname3: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      precomndpay: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomnt13th: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomntsal: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomotpay: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomsal: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomsss: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomtaxwit: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      precomtin: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      precomtin2: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      precomtin3: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      precomyearterm: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      precomzipcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      precomzipcode2: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      precomzipcode3: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      premiumpaid: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      prevapply: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      prjcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      probfromdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      probidate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      probtodte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      provarecde: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      provempadd1: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      provempadd2: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      provempadd3: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      ratestype: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      ratingcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      rcno: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      recid: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      refadd1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      refadd2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      refadd3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      refname1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      refname2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      refname3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      refocc1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      refocc2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      refocc3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      reftelno1: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      reftelno2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      reftelno3: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      regdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      region: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      regulardate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      relation_1: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      relation_10: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      relation_2: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      relation_3: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      relation_4: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      relation_5: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      relation_6: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      relation_7: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      relation_8: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      relation_9: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      religion: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      reloff: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      rel_depend_10: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      res_amount: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      res_cert: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      res_dateissue: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      res_issue: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      rglrztn_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      rnklvlcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      rtesycde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      scompname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      settofixtax: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      sex: {
        type: DataTypes.STRING(6),
        allowNull: true,
      },
      sgl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      sglexpdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      sgllinc: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      shiftbatch: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      shiftcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      shiftgroup: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      soccupation: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      speciskills: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      spousebday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      spousename: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      ssscontee: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      sssconter: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      statuscode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      stoploanded: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
      subdrycde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      subuntcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      sycde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      talents: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      taxcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      tel: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      termdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      totgsisec: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      totgsislee: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      totgsisler: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      totgsisree: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      totgsisrer: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      tshirtsize: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      typecode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      unionmem: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      unitcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      usrtyp: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "user",
      },
      usrtyp2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      viewconess: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      viewconess2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      viewconess3: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      viewconesspic: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weight: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      withtax: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      withwhom: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      wittaxtodate: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      xpaycycle: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      yeswhen: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      adminfee_amt: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      copyfrom: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      inc75: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      insured: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      precomcomputetax: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      curotheraddress: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      curwithwhom: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      cur_arecde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      cur_countrycde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      date_awol: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      date_death: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      date_disability: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      date_resigned: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      date_retirement: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      date_termination: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      empcuryos: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      empcur_add1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empcur_add2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empcur_add3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empcur_citycde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      fpt_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      fpt_deptcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      rpt_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      rpt_deptcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      consultfromdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      consulttodte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      contfromdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      conttodte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      is_lock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      projbasefromdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      projbasetodte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      notifybyemail_esspayslip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      is_offboarding: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      offboarding_dte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      offboarding_enddte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      offboarding_status: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      onboarding_code: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      peraamt: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      perayear: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      "1604_emptyp": {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      "1604_filingtyp": {
        type: DataTypes.STRING(3),
        allowNull: true,
        defaultValue: "Y",
      },
      "1604_sepcde": {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      biometrics_dir: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      signature_dir: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      sgcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      stepcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "employeefile",
      timestamps: false,
    }
  );
};
