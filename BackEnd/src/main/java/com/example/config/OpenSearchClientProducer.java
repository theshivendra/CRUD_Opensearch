
package com.example.config;

import org.apache.http.HttpHost;
import org.opensearch.client.RestClient;
import org.opensearch.client.RestHighLevelClient;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Produces;
import org.eclipse.microprofile.config.inject.ConfigProperty;

/**
 * Produces a singleton instance of RestHighLevelClient for interacting with OpenSearch.
 */
@ApplicationScoped
public class OpenSearchClientProducer {

    @ConfigProperty(name = "opensearch.host")
    String host;

    /**
     * Creates and returns an OpenSearch client.
     *
     * @return RestHighLevelClient instance
     */
    @Produces
    public RestHighLevelClient createClient() {
        return new RestHighLevelClient(
                RestClient.builder(new HttpHost(host, 9200, "http"))
        );
    }

}


