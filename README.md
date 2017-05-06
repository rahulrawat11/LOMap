# LOMap
LOMap is an app for creating a knowledge network graph, by creating nodes for different concepts and creating dependencies between them. LOMap is built on structrUI using Neo4j database. 

Instructions for using LOMap
====
If you are on a debian or Ubuntu PC install the following packages.
Use corresponding package names if you are using an RPM based distro
(fedora or centos). 

I. Installing required packages and its dependencies
----

1)	Neo4j:
	Neo4j is the graph database on which LOMap runs. Neo4j requires Java 8
	runtine prior to installation

	a)	The Debian package is available from http://debian.neo4j.org.
	b)	To use the repository follow these steps:

		wget -O - https://debian.neo4j.org/neotechnology.gpg.key | sudo apt-key add -
		echo 'deb http://debian.neo4j.org/repo stable/' | sudo tee -a /etc/apt/sources.list.d/neo4j.list
		sudo apt-get update

	c)	Installing Neo4j

		For community edition:
		sudo apt-get install neo4j

		For Neo4j enterprise edition:
		sudo apt-get install neo4j-enterprise


2)	StructrUI:

	The structrUI is the CMS for Neo4j which has been used to build LOMap.
	The Debian Package (.deb file) can be downloaded form Maven Central.

	For releases:
	https://oss.sonatype.org/content/repositories/releases/org/structr/structr-ui/

	For snapshots:

	https://oss.sonatype.org/content/repositories/snapshots/org/structr/structr-ui/

	After download, install the Debian package with sudo dpkg -i structr-ui-<version>.deb

	Structr will be installed in /usr/lib/structr-ui, log file is /var/log/structr-ui.log

	Start Structr with sudo service structr-ui start

	Go to http://localhost:8082/structr#pages

	Login with the default credentials admin/admin

3)	VivagraphJS:

	VivagraphJS is a graph visualization tool used in LOMap for visualizing the Neo4j data.
	VivagraphJS can be downloaded from:

	https://github.com/anvaka/VivaGraphJS

II.	Instructions for running LOMap:
----

1)	Start the neo4j server

		sudo service neo4j start

	The servier runs on port 7474.
	
	Go to http://localhost:8082/structr#pages and login with the default credentials admin/admin
2)	The index.html loads vivagraph script for visualizing the neo4j data.
	Go to the LOMap directory and run the following command:
	python -m SimpleHTTPServer 8002
	This command runs Vivagraph on port 8002

3)	The structr_app directory is the app which needs to be imported into structr by following command:

	curl -HX-User:admin -HX-Password:admin http://localhost:8082/structr/rest/maintenance/deploy -d '{"mode":"import", "source": "/<path-to>/LOMap/structr-app"}'

	Go to http://localhost:8082/structr#pages

	Login with the default credentials admin/admin


