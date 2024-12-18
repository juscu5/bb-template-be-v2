const { DataTypes } = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define(
    "syspar",
    {
      recid: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      rndpw: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      defpw: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      sndmail: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      empdirect: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      repalignment: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      repheight: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      replogo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      repwidth: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      ol_admin_mode: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      inclink: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      xpt_dlmtr: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      xpt_extnsn: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      use_gmap: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      googlemap_apikey: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      "19a": {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      "19b": {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      "19c": {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      "20a": {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      "20b": {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      "20c": {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      activatelogfile: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      allowmultiwar: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      allowspechar: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      allow_jo_pos_add: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      apcdefcurfor: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: "0",
      },
      apcdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "APC-0000000000",
      },
      apcdocnumfor: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "0",
      },
      apcmnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "PRT-0000000000",
      },
      apdatelock1: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      apdatelock2: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      apddocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "APD-0000000000",
      },
      apdefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      appcodedocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      appcodedocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      appdefcurfor: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: "0",
      },
      appdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "APP-0000000000",
      },
      appdocnumfor: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "0",
      },
      appdocnunlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      appform_entry_format: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      appform_format: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      appform_terms: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      applicantlist_browsing_format: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "BY_APPLICANT",
      },
      applicantlist_pos_src: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "POSITION_FILE",
      },
      aprdefcurfor: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: "0",
      },
      aprdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "APR-0000000000",
      },
      aprdocnumfor: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "0",
      },
      aprmodtyp: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      aprprn: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      apsetreportdate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      aptogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      arcdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ARC-0000000000",
      },
      arcmnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "SRT-0000000000",
      },
      ardatelock1: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ardatelock2: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      arddefcurfor: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: "0",
      },
      arddocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ARD-0000000000",
      },
      arddocnumfor: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "0",
      },
      ardefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      arpdefcurfor: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: "0",
      },
      arpdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ARP-0000000000",
      },
      arpdocnumfor: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "0",
      },
      arrdefcurfor: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: "0",
      },
      arrdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ARR-0000000000",
      },
      arrdocnumfor: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "0",
      },
      arrmodtyp: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      arrprn: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      arsetreportdate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      artdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      artogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      attdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ATT-0000000000",
      },
      auto_reg_ess: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      bnkautocom: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      bnkdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "BR-0000000000",
      },
      branch: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cdl_docnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      checkprintername: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      chkapc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkapcdocnumfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkapcforenabled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkapcprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkapcprintfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkapd: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkapdprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkaphelpfile: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkapp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkappdocnumfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkappforenabled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkappprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkappprintfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkapr: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkaprdocnumfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkaprforenabled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkaprprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkaprprintfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkaptooltip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarcdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarcprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkard: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarddocnumfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkardforenabled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkardprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkardprintfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarhelpfile: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarpdocnumfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarpforenabled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarpprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarpprintfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarr: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarrdocnumfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarrforenabled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarrprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkarrprintfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkart: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkartooltip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkartprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkbnkdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkcashdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkcusdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkcussearch: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkdeptdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkgldocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkglprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkinvdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkinvextprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkinvhelpfile: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkinvlinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkinvprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkinvtooltip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkinvuntcst: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkitmclacde: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkitmcde: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkitemsearch: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkliqdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkno: {
        type: DataTypes.STRING(11),
        allowNull: true,
      },
      chkotdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpayablestogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkphcdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkphcextprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkphclinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkphcprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkphcuntcst: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpodocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpofordocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpoforenabled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpoforlinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpoforprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpohelpfile: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpolinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpoprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpotooltip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkpotorec: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkprodocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkproextprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkprolinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkproprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkprountcst: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkprtdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkprtlinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkprtprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecfordisc1: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecfordisc2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecfordisc3: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecfordiscinamt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecfordocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecforenabled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecforlinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecforprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkreclinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecothtorec: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chkrecprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksaldocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksaldocnumfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksalforenabled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksalhelpfile: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksallinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksallinenumfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksalothtosal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksalprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksalprintfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksaltooltip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksodocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksodocnumfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksoforenabled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksolinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksolinenumfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksoprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksoprintfor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksotosal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksrtdocnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksrtlinenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksrtprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chksupsearch: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chktooltip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      chktooltip_par: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      codte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      cost_center: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cost_group: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      crilvlconsolidated: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      crilvldefault: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      crilvlsingle: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      crilvltyp: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      crilvlwarcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      csdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      csislock: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "Y",
      },
      cso_docnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      cusdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      defaultcus: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      defaultwar: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      direct_pi_update: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      distribute_coddef: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      division: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      doslpt: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      email_auth_security: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      empcode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      empcodelock: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      empno: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      empnolock: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      emp_infrac_mode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      emp_tag_as_onboard: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      emp_type_setup: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      en_appno: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      en_empcode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      en_empno: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ess_ini_pass: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "default",
      },
      ess_logo_dir: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: "ess",
      },
      exact_path: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      excelheight: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      excelwidth: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      exitbackup: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      fetch_path: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      frsteval: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      getitmewt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      glautodte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      gldatelock1: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      gldatelock2: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      gldocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "GL-0000000000",
      },
      glsumdoc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hid_fms_notes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      hid_infract_amt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hid_infract_case_no: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hid_infract_condition: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hid_infract_sanction: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hr_mode: {
        type: DataTypes.STRING(250),
        allowNull: true,
        defaultValue: "company",
      },
      incrementtype: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      infdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      infdocnumlock: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      inputtaxper: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      invcosting: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      invdatelock1: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      invdatelock2: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      invdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "INV-0000000000",
      },
      invrebdte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      invrebuilddate1: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      invrebuilddate2: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      invrebuilditmcde1: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      invrebuilditmcde2: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      invtogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      inv_docnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ir_casenum: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "IR-000000000",
      },
      ir_casenumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      ir_casenum_auto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      is_hr_basic: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      is_locbrnccgrpcostfile: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      jo_reqby_hr_def: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      leavedocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "LV-0000000000",
      },
      leave_decimal_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 2,
      },
      lineheight: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      linktohr: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      liqdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "LIQ-0000000000",
      },
      loadact: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadbnk: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadbrn: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadcus: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loademp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadewt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loaditm: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loaditmcla: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadmemtyp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadprc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadsmn: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadsup: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadter: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadtrm: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadvat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loadwar: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loandocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "LN-0000000000",
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      masterfilesubsidiary: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      multicur: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      multiwar: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      newtab_empfile: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      new_tab: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      oapp_bckgrnd: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      oapp_bckgrnd_dir: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: "online_application",
      },
      oapp_profile_dir: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: "webapp",
      },
      obdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "OB-0000000000",
      },
      deptdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "DPT-0000000000",
      },
      olapp_sftp_dir: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      olapp_sftp_enable: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      olapp_sftp_host: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      olapp_sftp_password: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      olapp_sftp_port: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      olapp_sftp_username: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      olapp_use_sftp: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ol_allow_edit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      ol_instructions: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ol_job_list_type: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: "list",
      },
      ol_prompt: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ol_show_more_prio: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      ol_terms: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ordocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      otdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "OT-0000000000",
      },
      pagerrowperpage: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      phcdatelock1: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      phcdatelock2: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      phcdefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      phcdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "PHC-0000000000",
      },
      phcprio: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      phctogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      phc_docnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      philhealth_format: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "##-#########-#",
      },
      pi_format: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "####-####-####",
      },
      pmsdocnum: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "PMS-0000000",
      },
      pmsdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      pmslvl: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      podefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      podocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "PO-0000000000",
      },
      pofordefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      pofordocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "FORPO-0001",
      },
      potogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      printcheck: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      printvoucher: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      prodocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "QSP-UFTU5",
      },
      progver: {
        type: DataTypes.STRING(11),
        allowNull: true,
      },
      prtdefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      prtdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "PRT-0000000000",
      },
      prttogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      pr_autopost: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      pr_format: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      purdatelock1: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      purdatelock2: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      purrebdte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      recdefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      recdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "PUR-0000000000",
      },
      recfordefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      recfordocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "FORREC-0001",
      },
      rectoap: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rectogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rem_faci_anniv: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rem_faci_con_exp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rem_faci_endo_prob: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      reqloandocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "LON-000000000",
      },
      reqloandocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      req_officeemail: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      round2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      round2qty: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      saldatelock1: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      saldatelock2: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      saldefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      saldefcurfor: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: "0",
      },
      saldocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "SAL-0000000000",
      },
      saldocnumfor: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "0",
      },
      salrebdte: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      salrowcnt: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      saltoar: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      saltogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      showapprvdialog: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      show_appform_sign: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      show_app_process: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      show_con_anniv_probi_noti: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      show_emplv_empinout_empab: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      show_recruit_add: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      sodefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      sodefcurfor: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: "0",
      },
      sodocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "SO-0000000000",
      },
      sodocnumfor: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "0",
      },
      sotogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      spechar: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      srtdefcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      srtdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "SRT-0000000000",
      },
      srttogl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      sss_format: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "##-####-###-#",
      },
      stkcounter: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: true,
        defaultValue: 0.0,
      },
      subdrycde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      subsidiary: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      sycde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      test_email: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      tin_format: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "###-###-###-###",
      },
      todocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "TO-0000000000",
      },
      todocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      trainingdocnum: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "TRN-000000000",
      },
      trainingdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      uldocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "UL-0000000000",
      },
      uploadtype: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "SKIPLINE",
      },
      userlogmaxrec: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      usrhost: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      usrname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      usrpwd: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      vchrdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      viodocnum: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      viodocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      vouformat: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      withess: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      adjlvdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ADJLV-000000000",
      },
      adjlvdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      adjotdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ADJOT-0000",
      },
      adjotdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      adjrhdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ADJRH-0000",
      },
      adjrhdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alert_resetpass: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      aludocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ALU-0000000000",
      },
      aludocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      appfurdoc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "APPFUR-000000",
      },
      appfurdoc_lock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      appoutdoc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "APPOUT-000000",
      },
      appoutdoc_lock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      approvermax: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      approvermax2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      approversendmail: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      approve_disapprove_filter_mode: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      bdayceleb_module: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      conflict_leave: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      conflict_leave_ob: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      conflict_leave_ot: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      conflict_request: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      consec_sl_validation: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cosdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "COS-0000000000",
      },
      cosdocnumlock: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      c_and_s: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dashboard_company_directory: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dashboard_noti_type: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dashboard_shortcut_position_below: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      direct_save_personal_info_change: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dshbrd_days_requi_sugstion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dtr_backtrackdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      dtr_empscheddte_backward: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 15,
      },
      dtr_empscheddte_onwardward: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 45,
      },
      dtr_reqlog: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      edonum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "EXC-0000000000",
      },
      edonumlock: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      emailhost: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      emailnotify: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      emailpass: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      empreqnum: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      empreqnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      empsched_dte_cutoff: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      empsched_dte_lock_typ: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "BY_CUTOFF_DATE",
      },
      etfdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      etfdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      excessappnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "EXCAPP-0000000000",
      },
      excessappnumlock: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      exc_epxdte_months: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      exc_filing_days_duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      expired_password: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      filterword: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      filter_personal_reason: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      final_app: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      force_login: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      headercolor_module: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      hide_ob_fields: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hide_payslip_compinfo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      holiday_slctr: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "department",
      },
      holiday_validation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      hrdb: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      hrhost: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      hrpw: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      hruser: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      hr_pic_mod: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      ind_dailyhrs: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 8,
      },
      insubcde: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      is_approved_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      is_checked_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      is_noted_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      is_prepared_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      is_recommending: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      jobdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "JV-0000000000",
      },
      jobdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      job_app: {
        type: DataTypes.STRING(2),
        allowNull: true,
        defaultValue: "1",
      },
      jvcdocnum: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "JV-0000000000",
      },
      jvcdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      jvrdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "JVR-0000000000",
      },
      jvrdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      leavedayslimit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 7,
      },
      leavedocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      leavehoursperdaylimit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 24,
      },
      leavehourstotallimit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 56,
      },
      leavemode: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: "DAYS",
      },
      leave_app: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      leave_balance_notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      linktotkm: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      loandocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      loi_min_yos: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      lunch_hrs: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      lwpbalmode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      manotdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "MNOT-000000000",
      },
      manotdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      maxothrs: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      maxotlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      maxuthrs: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      maxutlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      messagelimit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10,
      },
      minimumminot: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      minintervalot: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "0",
      },
      minpolicyot: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      min_exchrs: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      min_exchrsapp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      monthafter: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 6,
      },
      monthbefore: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 6,
      },
      near_to_expired: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      noofotconv: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      noofottol: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      noofsl: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      note_in_view_leave: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      oballoweddy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      obdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      obmode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      ob_app: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      ob_date_validation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      oeformdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "OE-00000000",
      },
      oeformdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      onoffsub: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      otalloweddy: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      otalloweddyon: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      otconvlv: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      otdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      otinshow: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      otoutshow: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ot_app: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      ot_expected_output: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      apprfileot_dte_cutoff: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      payslip_format: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "standard_format",
      },
      personinfodocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "PERINFO-0000000000",
      },
      personinfodocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      planint: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      posttkm: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      printreminder: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      print_button: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      profilepic_module: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      pr_type: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "SUM",
      },
      regrep: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      reqdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "REQ-0000000000",
      },
      reqlognum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "RL-0000000000",
      },
      reqlognumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      request_cancel_filter_mode: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      require_contactnumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rnddownot: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rsn_leave: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rsn_ob: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rsn_ot: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rsn_ut: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      showapprvreason: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      show_early_ot: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      show_evaluation_noti: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      show_leave_req_attach: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      show_mobile_link: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      show_obtype: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      apprfileob_dte_cutoff: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      show_ob_apprvl_actual_in: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      show_ob_apprvl_actual_out: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      show_ob_apprvl_has_manual_entry: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      show_ob_apprvl_has_ob: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      show_ob_apprvl_has_time_log: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      show_ob_apprvl_late_filing: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      show_ob_apprvl_shiftcode: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      sinreq_mobile: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      slhrapv: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      standalone: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      timemode: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      tkmdb: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tkmhost: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tkmpw: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tkmuser: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      training_app: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      trdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      trdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      trngdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "TRNG-0000000000",
      },
      trngdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      trng_req_type: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "SBA",
      },
      uldocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ul_time_validation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      utinshow: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      utoutshow: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ut_app: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      view_all_req: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      view_leavebal_approval: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      vwdtr: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      xav_jv_flds: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      emailbody: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      sec_agen_flds: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      vcbrowser_validation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      multisubdry: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      subdrylimit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      subdrylimitnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      dtrdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "DTR-0000000000",
      },
      dtrdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      enable_trn_email: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hide_timeclock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      empinfodocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ECINFO-000000",
      },
      empinfodocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      loanreqdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "LNREQ-00000000",
      },
      loanreqdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cashdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "CADV-000000000",
      },
      cashdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      disformating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      goaldocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "GS-0000000000",
      },
      goaldocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      perfdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "PERF-0000000000",
      },
      perfdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      promdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "PROM-0000000000",
      },
      promdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      oldempstat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      is_daybefleave: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      daybefleave: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 7,
      },
      appform_style: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      rem_faci_lic_exp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hide_ess_header: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hide_msgbrd: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hide_news: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hide_planner: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hide_training: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      multiusr: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      usrlimit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      usrlimitnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      maxsibling: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      maxchild: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      maxskill: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      maxdialect: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      conflict_edo_ot_disable: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      max_ob_attach: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      show_ob_attach: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      show_email_format: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1,
      },
      conflict_leave_wfh: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      hide_wfh_fields: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      max_wfm_attach: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      rsn_wfh: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      show_wfhtype: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      show_wfh_attach: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      wfhdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "WFH-0000000000",
      },
      otp_active: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      is_timeclock_img: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      is_timeclock_imgreq: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      wfhdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      wfhmode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      is_vcwebautomation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      oauth2_site: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      oauth2_site_ess: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      serversite: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      apprfilewfh_dte_cutoff: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      max_wfh_attach: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      require_contactnumber_wfh: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      wfh_date_validation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      payslipdata_on: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      pr_label: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      pr_reqattach: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      peenddate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      perfevaldocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      perfevaldocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      pestartdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      tscountmax: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tscountmin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tsdocnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      tsdocnumlock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      attach_sizelimit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10,
      },
      itmclacde: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ICC-0000000000",
      },
      itmcde: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "ITM-0000000000",
      },
    },
    {
      sequelize,
      tableName: "syspar",
      timestamps: false,
    }
  );
};
