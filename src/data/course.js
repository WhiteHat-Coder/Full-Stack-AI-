window.course = {
    title: 'Full-Stack AI Engineer',
    subtitle: 'Python, machine learning, deep learning, MLOps, and generative AI',
    sections: [
        {
            id: 'section-1-lesson-1',
            section: 'Section 1',
            type: 'Lesson 1 · Introduction',
            title: 'The full-stack AI engineering journey',
            summary: 'An orientation to the 15-week, project-driven path from Python foundations to production-ready AI systems.',
            source: 'From Tutorial',
            objectives: [
                'Describe the journey from Python foundations through data science, machine learning, deep learning, MLOps, and generative AI.',
                'Recognize the practical work included in the course: building, training, deploying, monitoring, and scaling AI systems.',
                'Identify the tools and project outcomes introduced in the course roadmap.'
            ],
            concepts: [
                {
                    title: 'The modern AI stack',
                    body: 'The course presents AI engineering as an end-to-end discipline. It begins with Python programming, moves through data work and model development, then covers deployment, automation, monitoring, and generative AI applications.'
                },
                {
                    title: 'A project-driven path',
                    body: 'The tutorial describes a 15-week immersive journey built for practice. Each week includes exercises, real datasets, and hands-on labs so that ideas are applied immediately.'
                },
                {
                    title: 'From idea to production',
                    body: 'The intended outcome is not only understanding AI concepts. Learners are expected to build models and applications, package and deploy them, and understand the lifecycle from data collection through monitoring.'
                }
            ],
            roadmap: [
                { name: 'Python foundations', detail: 'Programming skills, NumPy, and pandas for working with data.' },
                { name: 'Data science and machine learning', detail: 'Cleaning, visualization, regression, classification, ensembles, and evaluation.' },
                { name: 'Deep learning', detail: 'Neural networks with TensorFlow and PyTorch for images, text, and time series.' },
                { name: 'MLOps and cloud deployment', detail: 'Version control, automation, CI/CD, deployment, and model lifecycle practices.' },
                { name: 'Generative AI and LLMs', detail: 'GPT, Claude, Gemini, RAG systems, chatbots, content generators, and AI agents.' }
            ],
            takeaways: [
                'The course aims to develop production-ready AI engineering capability, not only theoretical familiarity.',
                'The transcript states that the program includes more than 15 projects and a custom generative AI application.',
                'The named tools include Python, NumPy, pandas, scikit-learn, TensorFlow, PyTorch, Docker, Git, MLflow, and LangChain.'
            ],
            check: {
                question: 'Which sequence best matches the course journey described in this lesson?',
                answer: 'Python foundations → data science and machine learning → deep learning → MLOps and cloud deployment → generative AI and large language models.'
            },
            resources: [
                { label: '15-week companion handbook', path: './pdf/section1/Lesson1/full-stack-ai-engineer-15-week-companion-handbook.pdf' },
                { label: 'All-lecture cheatsheets', path: './pdf/section1/Lesson1/full-stack-ai-engineer-all-lecture-cheatsheets.pdf' },
                { label: 'Project workbook', path: './pdf/section1/Lesson1/full-stack-ai-engineer-project-workbook.pdf' },
                { label: 'Visual field guide', path: './pdf/section1/Lesson1/full-stack-ai-engineer-visual-field-guide.pdf' }
            ]
        },
        {
            id: 'section-1-lesson-2',
            section: 'Section 1',
            type: 'Lesson 2 · AI foundations',
            title: 'Artificial intelligence: concepts, methods, and applications',
            summary: 'A broad map of artificial intelligence, from machine learning and neural networks to responsible deployment and emerging AI systems.',
            source: 'From Tutorial',
            objectives: [
                'Explain the relationship between artificial intelligence, machine learning, deep learning, and generative AI.',
                'Compare supervised, unsupervised, and reinforcement learning.',
                'Recognize the roles of neural network architectures such as CNNs, RNNs, LSTMs, and transformers.',
                'Identify data, training, evaluation, deployment, and fairness concerns in AI development.',
                'Distinguish narrow AI from the theoretical goal of artificial general intelligence.'
            ],
            concepts: [
                {
                    title: 'AI, machine learning, and deep learning',
                    body: 'Artificial intelligence is presented as the broad field of machines performing cognitive tasks such as reasoning, learning, problem solving, and decision making. Machine learning improves performance through experience and finds patterns in data. Deep learning uses multiple neural-network layers to learn abstract features from raw data.'
                },
                {
                    title: 'Three learning paradigms',
                    body: 'Supervised learning uses labeled input-output examples for tasks such as classification, spam detection, and price prediction. Unsupervised learning finds structure in unlabeled data through clustering, anomaly detection, and dimensionality reduction. Reinforcement learning trains an agent through actions, rewards, and penalties to maximize cumulative reward.'
                },
                {
                    title: 'Neural network foundations',
                    body: 'Artificial neurons receive inputs, apply weights, and use activation functions to produce outputs. An input layer receives features, hidden layers transform representations through weighted connections and non-linearity, and an output layer produces a prediction or classification.'
                },
                {
                    title: 'Specialized neural architectures',
                    body: 'Convolutional neural networks identify visual features such as edges and textures. Recurrent neural networks process sequences while retaining information across time steps. Long short-term memory networks use gates to preserve context over long sequences. Transformers use self-attention and parallel sequence processing for scalable language understanding and generation.'
                },
                {
                    title: 'Language, vision, and generation',
                    body: 'Natural language processing extracts meaning, sentiment, and intent, and supports translation and text generation. Computer vision supports object detection, scene understanding, facial analysis, medical diagnosis, quality control, and autonomous navigation. Generative AI learns patterns from large datasets to create text, images, audio, and video.'
                },
                {
                    title: 'Data and features determine results',
                    body: 'The tutorial emphasizes high-quality, clean, diverse, balanced training data. Feature engineering analyzes raw data, transforms it into meaningful representations, and selects useful variables. Big data is described through volume, velocity, variety, and veracity.'
                },
                {
                    title: 'Generalization and optimization',
                    body: 'Overfitting occurs when a model memorizes training data and performs poorly on new data; regularization, cross-validation, more data, and simpler architectures are listed as remedies. Underfitting occurs when a model is too simple; adding features, increasing complexity, or training longer can help. Gradient descent updates parameters to reduce loss, while backpropagation sends prediction error backward to adjust weights.'
                },
                {
                    title: 'Reusing and combining models',
                    body: 'Transfer learning reuses knowledge from a pretrained model to reduce training time and data requirements. Fine-tuning adapts a pretrained model by preserving general features and training later layers for a specific domain. Ensemble methods combine multiple model predictions to improve robustness; random forests combine decision trees using bootstrap samples and majority voting.'
                },
                {
                    title: 'Classical machine learning methods',
                    body: 'Support vector machines seek a maximum-margin separating hyperplane and can use the kernel trick for nonlinear relationships. K-means repeatedly assigns points to the nearest centroid and updates centroids. Principal component analysis transforms high-dimensional data into lower-dimensional representations while preserving as much variance as possible.'
                },
                {
                    title: 'AI systems in the world',
                    body: 'Expert systems combine a domain knowledge base with an inference engine and user interface. Fuzzy logic represents degrees of truth between zero and one. Genetic algorithms evolve candidate solutions through selection, crossover, and mutation. Swarm intelligence uses local rules and emergent behavior, including ant colony, particle swarm, and bee-inspired methods.'
                },
                {
                    title: 'Deployment and responsible AI',
                    body: 'Robotics combines sensors, AI planning, and actuation. Edge computing processes data locally for fast responses, lower bandwidth use, and privacy. Cloud AI provides scalable computation, GPU-based training, API deployment, and shared resources. Explainable AI techniques such as LIME, SHAP, and attention visualization help interpret model decisions. Federated learning shares model updates instead of raw device data. AI ethics requires attention to fairness, privacy, accountability, transparency, and human values.'
                }
            ],
            roadmap: [
                { name: 'Understand the field', detail: 'Start with AI as the broad discipline, then place machine learning, deep learning, and generative AI within it.' },
                { name: 'Choose a learning setup', detail: 'Use labels for supervised learning, discover structure without labels, or learn through rewards and interaction.' },
                { name: 'Represent and learn', detail: 'Prepare data and features, choose an architecture or algorithm, then optimize its parameters.' },
                { name: 'Evaluate generalization', detail: 'Use held-out data and cross-validation while watching for overfitting, underfitting, bias, and data quality problems.' },
                { name: 'Deploy responsibly', detail: 'Select edge or cloud execution, interpret decisions where needed, protect data, and consider fairness and accountability.' }
            ],
            takeaways: [
                'Machine learning forms the backbone of modern AI, while deep learning uses multiple layers to learn complex patterns.',
                'Attention helps language models prioritize relevant input elements for translation, summarization, and question answering.',
                'Narrow AI is effective at specialized tasks, while artificial general intelligence remains a theoretical goal for human-level capability across domains.',
                'Important emerging directions include multimodal AI, neuromorphic computing, quantum machine learning, and human-AI collaboration.'
            ],
            clarification: 'The transcript is an introductory survey, so each topic here will receive deeper lessons later. The definitions and examples above are organized from the supplied transcript; they are not intended to replace implementation-focused lessons.',
            check: {
                question: 'A model is trained with labeled examples of housing features and prices. Which learning paradigm is being used?',
                answer: 'Supervised learning, because the training examples pair inputs with known target outputs.'
            },
            resourceIntro: 'Resources for this lecture include project materials and slides covering the course weeks.',
            resources: [
                { label: 'Course slides and project resources', path: './pdf/section1/Lesson2/Full-Stack+AI+Engineer.pdf' },
                { label: 'Code files', path: './pdf/section1/Lesson2/Code_files.zip' }
            ]
        }
    ]
};

// Transcript batches will be added here as structured lessons.
// Keep source facts, clarifications, and additional context explicitly labeled.
