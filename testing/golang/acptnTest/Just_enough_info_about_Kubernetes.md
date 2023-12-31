## Just enough info about Kubernetes

We run our software on [Kubernetes](https://kubernetes.io/) (K8s). K8s will terminate "pods" (in practice, our software) for various reasons, and a common one is when we push new code that we want to deploy.

We are setting ourselves high standards regarding [DORA metrics](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance), so we work in a way where we deploy small, incremental improvements and features to production multiple times per day.

When k8s wishes to terminate a pod, it initiates a ["termination lifecycle"](https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-terminating-with-grace), and a part of that is sending a SIGTERM signal to our software. This is k8s telling our code:

> You need to shut yourself down, finish whatever work you're doing because after a certain "grace period", I will send `SIGKILL`, and it's lights out for you.

On `SIGKILL` any work your program might've been doing will be immediately stopped.

