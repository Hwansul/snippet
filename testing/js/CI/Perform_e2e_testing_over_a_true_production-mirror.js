/* Perform e2e testing over a true production-mirror */

/**
 * ✅Do
 * End to end(e2e) testing are the main challenge of every CI pipeline — creating an identical ephemeral production mirror on the fly with all the related cloud services can be tedious and expensive.
 * Finding the best compromise is your game: [Docker - compose](https://serverless.com/) allows crafting isolated dockerized environment with identical containers using a single plain text file but the backing technology (e.g. networking, deployment model) is different from real-world productions. 
 * 
 * You may combine it with [‘AWS Local’](https://github.com/localstack/localstack) to work with a stub of the real AWS services. 
 * If you went [serverless](https://serverless.com/) multiple frameworks like serverless and [AWS SAM](https://docs.aws.amazon.com/lambda/latest/dg/serverless_app.html) allows the local invocation of FaaS code.
 * 
 * The huge Kubernetes ecosystem is yet to formalize a standard convenient tool for local and CI - mirroring though many new tools are launched frequently.
 * One approach is running a ‘minimized - Kubernetes’ using tools like [Minikube](https://kubernetes.io/docs/setup/minikube/) 
 * and [MicroK8s](https://microk8s.io/) which resemble the real thing only come with less overhead. 
 * 
 * Another approach is testing over a remote ‘real-Kubernetes’, some CI providers  * 
 * (e.g. [Codefresh](https://codefresh.io/)) has native integration with Kubernetes environment and make it easy to run the CI pipeline over the real thing, others allow custom scripting against a remote Kubernetes.
 */

/**
 * ❌Otherwise
 * Using different technologies for production and testing demands maintaining two deployment models and keeps the developers and the ops team separated
 */

// Example: a CI pipeline that generates Kubernetes cluster on the fly 
// ([Credit: Dynamic-environments Kubernetes](https://container-solutions.com/dynamic-environments-kubernetes/))

```
deploy:
stage: deploy
image: registry.gitlab.com/gitlab-examples/kubernetes-deploy
script:
- ./configureCluster.sh $KUBE_CA_PEM_FILE $KUBE_URL $KUBE_TOKEN
- kubectl create ns $NAMESPACE
- kubectl create secret -n $NAMESPACE docker-registry gitlab-registry --docker-server="$CI_REGISTRY" --docker-username="$CI_REGISTRY_USER" --docker-password="$CI_REGISTRY_PASSWORD" --docker-email="$GITLAB_USER_EMAIL"
- mkdir .generated
- echo "$CI_BUILD_REF_NAME-$CI_BUILD_REF"
- sed -e "s/TAG/$CI_BUILD_REF_NAME-$CI_BUILD_REF/g" templates/deals.yaml | tee ".generated/deals.yaml"
- kubectl apply --namespace $NAMESPACE -f .generated/deals.yaml
- kubectl apply --namespace $NAMESPACE -f templates/my-sock-shop.yaml
environment:
name: test-for-ci
```