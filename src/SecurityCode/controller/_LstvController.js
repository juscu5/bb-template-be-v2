"use strict";
require("dotenv").config();
const env = process.env.ISPRODUCTION
  ? process.env.ISPRODUCTION == "true"
    ? true
    : false
  : true;
const Op = require("sequelize").Op;
const sequelize = require("sequelize");
const { socketEvents } = require("../enums/socket-events.js");
const moment = require("moment");
const { lstv_func } = require("../controllers/_app.js");
const config = require("../config/config.js");
const co = require("co");
const model = require("../models/index.js");

class Filter {
  constructor(query, res) {
    this.query = query;
    this.res = res;
  }
  Get() {
    const sequel_query = {};
    // sequel_query['where'] = {
    // individualHooks: true
    // }
    Object.keys(this.query).forEach((value) => {
      switch (value) {
        case "_join":
          if (!sequel_query["include"]) {
            sequel_query["include"] = [];
          }
          if (this.query[value] === "true") {
            sequel_query["include"].push({ all: true, nested: true });
          }
          break;
        case "_joinv2":
          if (!sequel_query["include"]) {
            sequel_query["include"] = [];
          }
          // if (this.query[value] === 'true') {
          //     sequel_query['include'].push({ all: true });
          // }

          if (this.query[value].length !== "") {
            var seq_query_inc = [];
            this.query[value].split("/").forEach((valueContent) => {
              var removeBracket = valueContent.substring(
                1,
                valueContent.length - 1
              );
              var split_value = removeBracket.split(":");
              if (split_value[0] === "m") {
                var modelName = split_value[1];
                var modelObject = {
                  model: model[`lst_respos_${modelName}`],
                  // attributes: [],
                  // include: [],
                };
                seq_query_inc.push(modelObject);
              } else if (split_value[0] === "c") {
                var child_arr = split_value[1];

                child_arr.split(",").forEach((childValue) => {
                  var childValLength = childValue.split(".").length;
                  var param_string = "";
                  childValue.split(".").forEach((val, indexCount) => {
                    if (indexCount + 1 == 1) {
                      var convertValToModel = model[`lst_respos_${val}`];
                      seq_query_inc.forEach((incObj, indx) => {
                        if (incObj.model === convertValToModel) {
                          param_string += `seq_query_inc[${indx}]`;
                        }
                      });
                    } else if (indexCount + 1 != childValLength) {
                      var modelObject_child = {
                        model: model[`lst_respos_${val}`],
                      };

                      var setupObject = new Function(
                        "return " +
                          `function (seq_query_inc, new_model, model) {
                                                
                                                var return_val;
                                                if (!${param_string}.hasOwnProperty("include")) {
                                                    ${param_string}['include'] = [];

                                                    ${param_string}['include'].push(new_model); 
                                                    return_val = 0;

            
                                                    ${param_string}['include'].push(new_model); 
                                                    return_val = 0;
            
                                                }else{
                                                    var include_length = ${param_string}['include'].length;
                                                    ${param_string}['include'].forEach((incObj, indx) => {
                                                        var convertValToModel = model['lst_respos_${val}'];
                                                        
                                                        if(incObj.model === convertValToModel){
                                                            return_val = indx;
                                                        }else{
                                                            ${param_string}['include'].push(new_model);
                                                            return_val = include_length;
                                                        }
                                                    });
                                                }

            
                                                return return_val;
                                            }`
                      )();

                      var returnIndex = setupObject(
                        seq_query_inc,
                        modelObject_child,
                        model
                      );
                      param_string += `['include'][${returnIndex}]`;
                    } else {
                      var modelObject_child = {
                        model: model[`lst_respos_${val}`],
                      };

                      // console.log(param_string);
                      var setupObject = new Function(
                        "return " +
                          `function (seq_query_inc, new_model, model) {
                                                if (!${param_string}.hasOwnProperty("include")) {
                                                    ${param_string}['include'] = [];
                                                    ${param_string}['include'].push(new_model); 
                                                }else{
                                                    ${param_string}['include'].push(new_model);
                                                }
                                            }`
                      )();

                      setupObject(seq_query_inc, modelObject_child, model);
                    }
                  });
                  // // param_string += `['include']`;.push(${modelObject_child}) return ${param_string}.push(new_model);
                  // setupObject(seq_query_inc, modelObject_child);
                  // console.log(seq_query_inc[0]);
                });
              } else if (split_value[0] === "a") {
                var attr_arr = split_value[1];

                attr_arr.split(",").forEach((attrValue) => {
                  var attrValLength = attrValue.split(".").length;
                  var param_string = "";
                  attrValue.split(".").forEach((val, indexCount) => {
                    if (indexCount + 1 == 1) {
                      var convertValToModel = model[`lst_respos_${val}`];
                      seq_query_inc.forEach((incObj, indx) => {
                        if (incObj.model === convertValToModel) {
                          if (incObj.model === convertValToModel) {
                            param_string += `seq_query_inc[${indx}]`;
                          }
                        }
                      });
                    } else if (indexCount + 1 != attrValLength) {
                      var modelObject_child = {
                        model: model[`lst_respos_${val}`],
                      };

                      var setupObject = new Function(
                        "return " +
                          `function (seq_query_inc, new_model, model) {
                                                
                                                var return_val;
                                                if (!${param_string}.hasOwnProperty("include")) {
                                                    ${param_string}['include'] = [];
            
                                                    ${param_string}['include'].push(new_model); 
                                                    return_val = 0;
            
                                                }else{
                                                    var include_length = ${param_string}['include'].length;
                                                    ${param_string}['include'].forEach((incObj, indx) => {
                                                        var convertValToModel = model['lst_respos_${val}'];
                                                        
                                                        if(incObj.model === convertValToModel){
                                                            return_val = indx;
                                                        }else{
                                                            ${param_string}['include'].push(new_model);
                                                            return_val = include_length;
                                                        }
                                                    });
                                                }

            
                                                return return_val;
                                            }`
                      )();

                      var returnIndex = setupObject(
                        seq_query_inc,
                        modelObject_child,
                        model
                      );
                      param_string += `['include'][${returnIndex}]`;
                    } else {
                      var setupObject = new Function(
                        "return " +
                          `function (seq_query_inc, attr) {
                                                if (!${param_string}.hasOwnProperty("attributes")) {
                                                    ${param_string}['attributes'] = [];
                                                    ${param_string}['attributes'].push(attr); 
                                                }else{
                                                    ${param_string}['attributes'].push(attr);
                                                }
                                            }`
                      )();

                      setupObject(seq_query_inc, val);
                    }
                  });
                });
              }
            });

            for (let data of seq_query_inc) {
              sequel_query["include"].push(data);
            }
          }

          break;
        case "_distinct":
          break;
        case "_max":
        case "_min":
        case "_sum":
        case "_count":
          if (!sequel_query["attributes"]) {
            sequel_query["attributes"] = [];
          }
          this.query[value].split(",").forEach((valueContent) => {
            sequel_query["attributes"].push([
              sequelize.fn(value.replace("_", ""), sequelize.col(valueContent)),
              valueContent,
            ]);
          });
          break;
        case "_includes":
          if (!sequel_query["attributes"]) {
            sequel_query["attributes"] = [];
          }
          this.query[value].split(",").forEach((valueContent) => {
            sequel_query["attributes"].push(valueContent);
          });
          break;
        case "_excludes":
          if (!sequel_query["attributes"]) {
            sequel_query["attributes"] = {};
          }
          if (!sequel_query["attributes"]["exclude"]) {
            sequel_query["attributes"]["exclude"] = [];
          }
          this.query[value].split(",").forEach((valueContent) => {
            sequel_query["attributes"]["exclude"].push(valueContent);
          });
          break;
        case "_limit":
          sequel_query["limit"] = parseInt(this.query[value] || 0);
          break;
        case "_groupby":
          if (!sequel_query["group"]) {
            sequel_query["group"] = [];
          }
          this.query[value].split(",").forEach((valueContent) => {
            sequel_query["group"].push(valueContent);
          });
          break;
        case "_offset":
          sequel_query["offset"] = parseInt(this.query[value] || 0);
          break;
        case "_sortby":
          if (!sequel_query["order"]) {
            sequel_query["order"] = [];
          }
          this.query[value].split(",").forEach((valueContent) => {
            const field = valueContent.split(":")[0];
            const sort = valueContent.split(":")[1]
              ? valueContent.split(":")[1].toUpperCase() == "DESC"
                ? "DESC"
                : "ASC"
              : "ASC";
            sequel_query["order"].push([field, sort]);
          });
          break;
        default:
          if (!sequel_query["where"]) {
            sequel_query["where"] = {
              // individualHooks: true
            };
          }

          if (typeof this.query[value] !== "object") {
            this.query[value] = [this.query[value]];
          }
          this.query[value].forEach((tmp) => {
            switch (tmp.split(":")[0]) {
              case "or":
                if (tmp.split(":")[1].split(",").length > 0) {
                  sequel_query["where"][tmp.split(":")[0]];
                  if (!sequel_query["where"][value]) {
                    sequel_query["where"][value] = {};
                  }
                  if (!sequel_query["where"][value][Op.or]) {
                    sequel_query["where"][value][Op.or] = {};
                  }
                  let xquery;
                  tmp
                    .split(":")[1]
                    .replace("[", "")
                    .replace("]", "")
                    .split(",")
                    .forEach((value2) => {
                      if (value2.indexOf("=") > 0) {
                        //http://localhost:4000/api/mmenufile2?menucde=or:[like=COCKTAIL-008]
                        const command = value2.split("=")[0];
                        const commandValue = value2.split("=")[1];
                        if (!xquery) {
                          xquery = {};
                        }
                        switch (command) {
                          case "like":
                            xquery[Op[command]] = `%${commandValue}%`;
                            break;
                          case "slike":
                            xquery[Op.startsWith] = `%${commandValue}`;
                            break;
                          case "elike":
                            xquery[Op.endsWith] = `${commandValue}%`;
                            break;
                          default:
                            xquery[Op[command]] = commandValue;
                            break;
                        }
                      } else {
                        //http://localhost:4000/api/mmenufile2?menucde=or:[COCKTAIL-008]
                        if (!xquery) {
                          xquery = [];
                        }
                        xquery.push({ [Op.eq]: value2 });
                      }
                    });
                  sequel_query["where"] = {
                    ...sequel_query["where"],
                    ...{
                      [value]: {
                        [Op.or]: xquery,
                      },
                    },
                  };
                }
                break;
              case "and":
                if (tmp.split(":")[1].split(",").length > 0) {
                  sequel_query["where"][tmp.split(":")[0]];
                  if (!sequel_query["where"][value]) {
                    sequel_query["where"][value] = {};
                  }
                  if (!sequel_query["where"][value][Op.and]) {
                    sequel_query["where"][value][Op.and] = {};
                  }
                  let xquery;
                  tmp
                    .split(":")[1]
                    .replace("[", "")
                    .replace("]", "")
                    .split(",")
                    .forEach((value2) => {
                      if (value2.indexOf("=") > 0) {
                        //http://localhost:4000/api/mmenufile2?menucde=and:[like=COCKTAIL-008]
                        const command = value2.split("=")[0];
                        const commandValue = value2.split("=")[1];
                        if (!xquery) {
                          xquery = {};
                        }
                        switch (command) {
                          case "like":
                            xquery[Op[command]] = `%${commandValue}%`;
                            break;
                          case "slike":
                            xquery[Op.startsWith] = `%${commandValue}`;
                            break;
                          case "elike":
                            xquery[Op.endsWith] = `${commandValue}%`;
                            break;
                          default:
                            xquery[Op[command]] = commandValue;
                            break;
                        }
                      } else {
                        //http://localhost:4000/api/mmenufile2?menucde=and:[COCKTAIL-008]
                        if (!xquery) {
                          xquery = [];
                        }
                        xquery.push({ [Op.eq]: value2 });
                      }
                    });
                  sequel_query["where"] = {
                    ...sequel_query["where"],
                    ...{
                      [value]: {
                        [Op.and]: xquery,
                      },
                    },
                  };
                }
                break;
              case "in":
                if (tmp.split(":")[1].split(",").length > 0) {
                  sequel_query["where"][value] = {
                    [Op.in]: tmp.split(":")[1].split(","),
                  };
                }
                break;
              case "nin":
                if (tmp.split(":")[1].split(",").length > 0) {
                  sequel_query["where"][value] = {
                    [Op.notIn]: tmp.split(":")[1].split(","),
                  };
                }
                break;
              case "between":
                if (tmp.split(":")[1].split(",").length == 2) {
                  console.log("pass here 1");
                  sequel_query["where"][value] = {
                    [Op.between]: tmp.split(":")[1].split(","),
                  };
                  console.log(sequel_query);
                }
                break;
              case "nbetween":
                if (tmp.split(":")[1].split(",").length == 2) {
                  sequel_query["where"][value] = {
                    [Op.notBetween]: tmp.split(":")[1].split(","),
                  };
                }
                break;
              case "like":
                sequel_query["where"][value] = {
                  [Op.like]: `%${tmp.split(":")[1]}%`,
                };
                break;
              case "slike":
                sequel_query["where"][value] = {
                  [Op.startsWith]: tmp.split(":")[1],
                };
                break;
              case "elike":
                sequel_query["where"][value] = {
                  [Op.endsWith]: tmp.split(":")[1],
                };
                break;
              case "gte":
                sequel_query["where"][value] = {
                  [Op.gte]: tmp.split(":")[1],
                };
                break;
              case "gt":
                sequel_query["where"][value] = {
                  [Op.gt]: tmp.split(":")[1],
                };
                break;
              case "lte":
                sequel_query["where"][value] = {
                  [Op.lte]: tmp.split(":")[1],
                };
                break;
              case "lt":
                sequel_query["where"][value] = {
                  [Op.lt]: tmp.split(":")[1],
                };
                break;
              case "ne":
                sequel_query["where"][value] = {
                  [Op.ne]: tmp.split(":")[1],
                };
                break;
              case "eq":
                sequel_query["where"][value] = {
                  [Op.eq]: tmp.split(":")[1],
                };
                break;
              // FOR NOT EMPTY AND NOT NULL FILTER
              // const regexEmpty = '^$';
              // const regexNull = '\0';
              case "notregexp":
                sequel_query["where"][value] = {
                  [Op.notRegexp]: tmp.split(":")[1],
                };
                break;
              case "regexp":
                sequel_query["where"][value] = {
                  [Op.regexp]: tmp.split(":")[1],
                };
                break;
              case "eqv2":
                sequel_query["where"][value] = {
                  [Op.eq]:
                    tmp.split(":")[1] === "null" ? null : tmp.split(":")[1],
                };
                break;
              case "nev2":
                sequel_query["where"][value] = {
                  [Op.ne]:
                    tmp.split(":")[1] === "null" ? null : tmp.split(":")[1],
                };
                break;

              default:
                sequel_query["where"][value] = {
                  [Op.eq]: tmp,
                };
                break;
            }
          });

          break;
      }
    });
    // console.log(sequel_query)
    return sequel_query;
  }
}

class LstvController {
  constructor(model, dbname) {
    this.PROTECTED_ATTRIBUTES = ["usrpwd"];
    this.model = model;
    this.modelname = model;
    this.dbname = dbname;
    this.fcon_revised = null;

    this.Validator = async (req, res) => {
      const db = require("../models/index.js");
      this.model = db[`${this.dbname}_${this.modelname}`];
      // const referer = req.headers.referer.split('/').filter(e => e);
      // if (req.headers.comcde && this.dbname && (referer[2] != undefined && referer[2] !== 'applist') && req.headers.appcde) {
      if (req.headers.comcde && this.dbname && req.headers.appcde) {
        const comcde = await lstv_func("decrypt", req.headers.comcde, req, res);
        let database = require("../config/config.js").development.databases[
          dbname
        ];
        const appcde =
          config[env === "true" ? "production" : "development"].databases[
            this.dbname
          ].company_progconf;
        const company_progconf =
          await db.lstv_dbsystem_company_progconf.findAll({
            raw: true,
            where: {
              appcde: appcde,
              $col: sequelize.where(
                sequelize.fn("lower", sequelize.col("comcde")),
                sequelize.fn("lower", comcde)
              ),
            },
          });

        if (!company_progconf[0]) {
          return res.status(404).send({ message: "Invalid company code." });
        }
        const f1 = await lstv_func("decrypt", company_progconf[0].f1, req, res);
        const isExpired = moment(f1.expiry_date, "YYYY-MM-DD").isBefore(
          moment().format("YYYY-MM-DD")
        );
        if (isExpired && appcde !== "APPSYSTEM") {
          if (!env) {
            const f1_detail = await lstv_func(
              "decrypt",
              company_progconf[0].f1,
              req,
              res
            );
            var clientIP1 = req.connection.remoteAddress;
            var clientIP2 = req.client._peername.address;
            return res.status(402).send({
              message: "Security code expired.",
              data: {
                warn1: `${moment(f1_detail.expiry_date).format(
                  "MM"
                )}-001-${moment(f1_detail.expiry_date).format(
                  "DD"
                )}-001-${moment(f1_detail.expiry_date).format("YY")}`,
                warn2: `${moment().format("MM")}${moment().format(
                  "MM"
                )}-000-${moment().format("DD")}${moment().format(
                  "DD"
                )}-000-${moment().format("YY")}${moment().format("YY")}`,
                serialno: f1_detail.serialno,
                compno: f1_detail.xcompanyno,
                ip: clientIP1.replace(/::ffff:/g, ""),
              },
            });
          }
        }

        const fcon = await lstv_func(
          "decrypt",
          company_progconf[0].fcon,
          req,
          res
        );
        const connectionType = {
          my: "mysql",
        };
        this.fcon_revised = {
          host: fcon.host,
          username: fcon.user,
          password: fcon.pass,
          database: fcon.dbname,
          dialect: connectionType[fcon.type],
        };
        // console.log(this.fcon_revised)
        const dbPathFiltered = {
          ...database,
          ...this.fcon_revised,
        };
        const useDb = require("../routes/custom.js").useDB;
        this.model = useDb(dbPathFiltered, database.name, this.modelname);
      }
    };
    this.Create = async (req, res) => {
      // await this.Validator(req, res)`;
      this.model
        .bulkCreate(req.body)
        .then(() => {
          return res
            .status(201)
            .json({
              message: `Handling ${req.method} request to ${req.originalUrl}`,
            });
        })
        .catch(sequelize.UniqueConstraintError, (err) => {
          if (env) {
            res.sendStatus(409);
          } else {
            res.send(err);
          }
          console.log(err);
        })
        .catch(sequelize.DatabaseError, (err) => {
          if (env) {
            res.sendStatus(400);
          } else {
            res.send(err);
          }
          console.log(err);
        })
        .catch((err) => {
          if (env) {
            res.sendStatus(400);
          } else {
            res.send(err);
          }
          console.log(err);
        });
      // res.end();
    };
    this.Read = async (req, res) => {
      // await this.Validator(req, res);
      const filter = new Filter(req.query, res);
      if (req.query["_distinct"]) {
        const options = filter.Get();
        this.model
          .aggregate(req.query["_distinct"], "DISTINCT", {
            plain: false,
            ...options,
          })
          .then((e) => {
            const store = [];
            e.forEach((value) => store.push(value["DISTINCT"]));
            res.json(store);
          })
          .catch(sequelize.DatabaseError, (err) => {
            if (env) {
              res.status(400);
            } else {
              res.send({
                message: err.parent.sqlMessage,
                ...this.fcon_revised,
              });
            }
          })
          .catch((err) => {
            if (env) {
              res.sendStatus(400);
            } else {
              res.send(err);
            }
            console.log(err);
          });
      } else {
        // console.log(filter.Get())
        // const arrayTables = [];
        // for (const [key, value] of Object.entries(this.model.tableAttributes)) {
        //     if (value.references) {
        //         arrayTables.push(value.references.model);
        //     }
        // }
        // co(function*() {
        //     const user = yield model.findAndCountAll({
        //         ...filter.Get(),
        //         ...{
        //             include: arrayTables
        //         }
        //     });

        //     return user.rows;
        // }).then(value => {
        //     // console.log(value, 'VALUE')
        // })
        // console.log(user)
        this.model
          .findAndCountAll(filter.Get())
          .then((e) => {
            if (global.socket && global.progressField) {
              const stringify = JSON.stringify(e.rows);
              const obj = JSON.parse(stringify);
              for (let i = 0; i < obj.length; i++) {
                global.socket.emit("progress", obj[i][global.progressField]);
              }
              global.socket.emit("progress", "Finished.");
            }
            return e;
          })
          .then((e) => {
            res.setHeader("X-Total-Count", e.count);
            res.setHeader("X-Res-Count", Object.keys(e.rows).length);
            res.json(e.rows);
          })
          .catch(sequelize.DatabaseError, (err) => {
            if (env) {
              res.status(500).send();
            } else {
              res.status(500).send({
                message: err.parent.sqlMessage,
                // ...this.fcon_revised
              });
            }
          })
          .catch((err) => {
            console.log("err", err);
            if (env) {
              res.status(400);
            } else {
              console.log(err);
              res.send(err);
            }
          });
      }
    };
    this.UpdateOne = async (req, res, next) => {
      // await this.Validator(req, res);
      if (!req.query["_distinct"]) {
        return this.model
          .update(req.body, {
            where: { recid: req.params.id },
            individualHooks: true,
          })
          .then(() => {
            res
              .status(200)
              .json({
                message: `Handling ${req.method} request to ${req.originalUrl}`,
              });
          })
          .catch(sequelize.UniqueConstraintError, (err) => {
            if (env) {
              res.status(409);
            } else {
              console.log(err);
              res.send(err);
            }
          })
          .catch(sequelize.DatabaseError, (err) => {
            if (env) {
              res.status(400);
            } else {
              res.send({
                message: err.parent.sqlMessage,
                ...this.fcon_revised,
              });
            }
          })
          .catch((err) => {
            console.log("pass 5", err);

            if (env) {
              // console.log(err)
              res.send(err);
            } else {
              // console.log(err)
              res.send(err);
            }
          });
      }
    };
    this.Patch = async (req, res) => {
      // await this.Validator(req, res);
      if (!req.query["_distinct"]) {
        return this.model
          .update(req.body.data, { where: req.body.field })
          .then(() =>
            res
              .status(200)
              .json({
                message: `Handling ${req.method} request to ${req.originalUrl}`,
              })
          )
          .catch(sequelize.DatabaseError, (err) => {
            if (env) {
              res.status(400);
            } else {
              res.send({
                message: err.parent.sqlMessage,
                ...this.fcon_revised,
              });
            }
          })
          .catch((err) => {
            if (env) {
              console.log(err);
              res.send(err);
            } else {
              console.log(err);
              res.send(err);
            }
          });
      }
    };
    this.BulkUpdate = async (req, res) => {
      // await this.Validator(req, res);
      let fields = [];
      Object.values(req.body).map((tmp) => {
        fields = Object.keys(tmp);
      });

      this.model
        .bulkCreate(req.body, { updateOnDuplicate: fields })
        .then(() => {
          return res
            .status(201)
            .json({
              message: `Handling ${req.method} request to ${req.originalUrl}`,
            });
        })
        .catch(sequelize.UniqueConstraintError, (err) => {
          if (env) {
            res.status(409);
          } else {
            res.send({
              message: err.parent.sqlMessage,
              ...this.fcon_revised,
            });
          }
        })
        .catch(sequelize.DatabaseError, (err) => {
          if (env) {
            res.status(400);
          } else {
            console.log(err);
            res.send({
              message: err.parent.sqlMessage,
              ...this.fcon_revised,
            });
          }
        })
        .catch((err) => {
          if (env) {
            res.status(400);
          } else {
            console.log(err);
            res.send(err);
          }
        });
    };
    this.DeleteOne = async (req, res) => {
      // await this.Validator(req, res);
      if (!req.query["_distinct"]) {
        return this.model
          .destroy({
            where: {
              recid: req.params.id,
            },
          })
          .then(() =>
            res
              .status(200)
              .json({
                message: `Handling ${req.method} request to ${req.originalUrl}`,
              })
          )
          .catch(sequelize.DatabaseError, (err) => {
            if (env) {
              res.status(400);
            } else {
              console.log(err);
              res.send({
                message: err.parent.sqlMessage,
                ...this.fcon_revised,
              });
            }
          })
          .catch((err) => {
            console.log(err);
            if (env) {
              console.log(err);
              res.send(err);
            } else {
              console.log(err);
              res.send(err);
            }
          });
      }
    };
    this.BulkDelete = async (req, res) => {
      // await this.Validator(req, res);
      const filter = new Filter(req.query, this.model);
      if (!req.query["_distinct"]) {
        return this.model
          .destroy(filter.Get())
          .then(() =>
            res
              .status(200)
              .json({
                message: `Handling ${req.method} request to ${req.originalUrl}`,
              })
          )
          .catch(sequelize.DatabaseError, (err) => {
            if (env) {
              res.status(400);
            } else {
              console.log(err);
              res.send({
                message: err.parent.sqlMessage,
                ...this.fcon_revised,
              });
            }
          })
          .catch((err) => {
            console.log(err);
            if (env) {
              res.sendStatus(400);
            } else {
              console.log(err);
              res.send(err);
            }
          });
      }
    };
  }
}
module.exports = {
  Filter,
  LstvController,
};
