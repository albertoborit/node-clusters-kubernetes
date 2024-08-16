# For Running Kubernetes
- eval $(minikube -p minikube docker-env)
- docker build -t my-express-cluster-app .
- kubectl delete deployment express-cluster-deployment
- kubectl apply -f deployment.yml
- kubectl port-forward service/express-cluster-service 8080:80

# For test performance with the script
- k6 run tester.js

# For review the dashboard
- minikube addons enable metrics-server
- minikube dashboard

# To Review pod logs
- kubectl get pods
- kubectl logs POD-NAME