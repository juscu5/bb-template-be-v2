const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "users",
    {
      recid: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
      },
      hidepayamt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      payout_hidepayamt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      comcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      usrcde: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      usrname: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      usrpwd: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      usrlvl: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      grpcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      menkey: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      sesid: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      allow_backup: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
      allow_restore: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
      login_attempt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      resetpwd: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      usrsessid: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      usrsesstim: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      usripaddress: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      emailadd: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      emailbody: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      emailcc: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      subdrycde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      dtelastlog: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      actlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      failedlog: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      initlog: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dteexpired: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      actlock2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      ctrlnum: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      dept: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      deptcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      divcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      dtechangepw: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empno: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      fname: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      fullname: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      invdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      lname: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      login: {
        type: DataTypes.DECIMAL(18, 0),
        allowNull: true,
      },
      mname: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      nickname: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      paygroup: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      poscode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      profilepic: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      saldocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      usrmail: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      usrstat: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      usrtyp: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      usrtyp2: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "x",
      },
      warcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      appaytypbt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      appaytypchk: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      appaytypcsh: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      appaytypdm: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      appaytypoth: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      arpaytypbt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      arpaytypchk: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      arpaytypcm: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      arpaytypcsh: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      arpaytypoth: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      exccuscsrep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      exccusdr2rep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      exccusdrrep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      exccusdrsrep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      exccussalrep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      exccussorep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      exccussrtrep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      excsupporep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      excsupprtrep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      excsuprecrep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      lastbrhdsc: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      lastbrnch: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      noexcmas: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      noexctrn: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      noexp: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      noprt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      poviewprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      pureditprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      purhideprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      recviewprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saleditprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      salhideprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      salviewprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sig: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      sinreq_mobile: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      soviewprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      usrapprver: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      viewap: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      viewar: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      viewarcheckdep: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      viewcrilvl: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ad_usrcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      imei: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      show_rem: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      bday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      gpsloc: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      allowbrowserlogin: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      signature_dir: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      fp_dtereq: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      fp_dtereqexp: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      is_fp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      usrpwd_orig: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      otp_lock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      otp_resendctr: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
      },
      no_approver: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      otp_unlockdte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
    }
  );
};
