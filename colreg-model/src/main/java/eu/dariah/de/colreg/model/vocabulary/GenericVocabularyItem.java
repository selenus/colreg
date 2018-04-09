package eu.dariah.de.colreg.model.vocabulary;

import de.unibamberg.minf.dme.model.base.BaseIdentifiable;

public class GenericVocabularyItem extends BaseIdentifiable {
	private static final long serialVersionUID = 942372659078068387L;
	
	private String vocabulary;
	private String identifier;
	private String name;
	
	public String getVocabulary() { return vocabulary; }
	public void setVocabulary(String vocabulary) { this.vocabulary = vocabulary; }
	
	public String getIdentifier() { return identifier; }
	public void setIdentifier(String identifier) { this.identifier = identifier; }
	
	public String getName() { return name; }
	public void setName(String name) { this.name = name; }
}