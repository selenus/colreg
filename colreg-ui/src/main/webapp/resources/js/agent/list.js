var agentTable;
$(document).ready(function() {
	agentTable = new AgentTable();
});

var AgentTable = function() {
	this.prepareTranslations(["~eu.dariah.de.colreg.common.labels.deleted",
	                          "~eu.dariah.de.colreg.common.labels.draft",
	                          "~eu.dariah.de.colreg.common.labels.published",
	                          "~eu.dariah.de.colreg.common.labels.valid"]);
	this.createTable();
};

AgentTable.prototype = new BaseTable(__util.composeUrl("agents/list"), "#agent-table-container");

AgentTable.prototype.createTable = function() {
	this._base.table = $('#agent-table').DataTable($.extend(true, {
		"order": [[1, "asc"]],
		"columnDefs": [
	       {
	           "targets": [0],
	           "class" : "td-no-wrap",
	           "data": function (row, type, val, meta) { return agentTable.renderBadgeColumn(row, type, val, meta); }
	       }, {	
	    	   "targets": [1],
	    	   "data": "entity.name",
	    	   "width" : "100%"
	       }, {	
	    	   "targets": [2],
	    	   "data": "entity.type",
	    	   "class" : "td-no-wrap"
	       }, {	
	    	   "targets": [3],
	    	   "data": "entity.lastChanged",
	    	  /* "visible" : false*/
	       }, {
	    	   "targets": [4],
	           "searchable": false,
	           "sortable" : false,
	           "class" : "td-no-wrap",
	           "data": function (row, type, val, meta) { return agentTable.renderActionColumn(row, type, val, meta); }
	       }
	       
	   ]
	}, this.baseSettings));
};

AgentTable.prototype.renderBadgeColumn = function(row, type, val, meta) {
	var result = "";
	if (type=="display") {
		if (row.entity.state==="deleted") {
			result += '<span class="label label-danger">' + __translator.translate("~eu.dariah.de.colreg.common.labels.deleted") + '</span> ';
		} else if (row.entity.state==="valid") {
			result += '<span class="label label-info">' + __translator.translate("~eu.dariah.de.colreg.common.labels.valid") + '</span> ';
		} else if (row.entity.state==="published") {
			result += '<span class="label label-info">' + __translator.translate("~eu.dariah.de.colreg.common.labels.published") + '</span> ';
		} else {
			result += '<span class="label label-warning">' + __translator.translate("~eu.dariah.de.colreg.common.labels.draft") + '</span> ';
		} 
	} else {
		if (row.entity.state==="deleted") {
			result += __translator.translate("~eu.dariah.de.colreg.common.labels.deleted");
		} else if (row.entity.state==="valid") {
			result += __translator.translate("~eu.dariah.de.colreg.common.labels.valid");
		} else if (row.entity.state==="published") {
			result += __translator.translate("~eu.dariah.de.colreg.common.labels.published");
		} else {
			result += __translator.translate("~eu.dariah.de.colreg.common.labels.draft");
		} 
	}
	return result;
};

AgentTable.prototype.renderActionColumn = function(row, type, val, meta) {
	var result = "";	
	if (type==="display") {
		return 	"<a href=\"" + __util.composeUrl("agents/" + row.entity.entityId) + "\"><span class=\"glyphicon glyphicon-link\" aria-hidden=\"true\"></span></a>";
	}
	return result;
};